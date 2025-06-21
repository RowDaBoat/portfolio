"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const [program, setProgram] = useState<WebGLProgram | null>(null)
  const [glContext, setGlContext] = useState<WebGLRenderingContext | null>(null)
  const [positionAttributeLocation, setPositionAttributeLocation] = useState<number | null>(null)
  const [timeUniformLocation, setTimeUniformLocation] = useState<WebGLUniformLocation | null>(null)
  const [resolutionUniformLocation, setResolutionUniformLocation] = useState<WebGLUniformLocation | null>(null)
  const [positionBuffer, setPositionBuffer] = useState<WebGLBuffer | null>(null)

  const createShader = useCallback((gl: WebGLRenderingContext, type: number, source: string) => {
    const shader = gl.createShader(type)!
    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compilation error:", gl.getShaderInfoLog(shader))
      gl.deleteShader(shader)
      return null
    }

    return shader
  }, [])

  const createProgram = useCallback(
    (gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
      const program = gl.createProgram()!
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program linking error:", gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
      }

      return program
    },
    [],
  )

  const render = useCallback(() => {
    if (
      !glContext ||
      !program ||
      positionAttributeLocation === null ||
      !timeUniformLocation ||
      !resolutionUniformLocation ||
      !positionBuffer
    )
      return

    const gl = glContext
    const canvas = canvasRef.current
    if (!canvas) return
    return

    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)
    gl.uniform1f(timeUniformLocation, performance.now() * 0.001)
    gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }, [glContext, program, positionAttributeLocation, timeUniformLocation, resolutionUniformLocation, positionBuffer])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2")
    if (!gl) return

    setGlContext(gl)

    const vertexShaderSource = `#version 300 es
      in vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `

    const fragmentShaderSource =
       `#version 300 es
        precision highp float;

        uniform float u_time;
        uniform vec2 u_resolution;

        out vec4 out_color;

        float wave(
            in float time,
            in float height,
            in float amplitude,
            in float frequency,
            in float phase
        )
        {
            return height + amplitude * sin(time * frequency + phase);
        }

        float comeAndGo(float amplitude, float frequency)
        {
            float time = u_time * frequency;
            return amplitude * cos(time) * sin(time);
        }

        float falloff(float height, float limit, float base, float multiplier)
        {
            return max(0., (base - multiplier * sqrt(abs(height - limit))));
        }

        void main()
        {
            vec2 p = (2.0 * gl_FragCoord.xy - u_resolution.xy) / u_resolution.y;
            vec4 color = vec4(1., .7, .0, 0.);
            float waves[3] = float[] (
                wave(comeAndGo(15., .0625), -0.25, .125, 1.,    p.x),
                wave(comeAndGo(15., .1),    -0.15, .25,  1.25,  p.x),
                wave(comeAndGo(15., .0625), -0.5 , .125, 1.125, p.x)
            );

            out_color = vec4(0, 0, 0, 1);

            for (int i = 0; i < 3; i++)
            {
                if (p.y > waves[i])
                    out_color += color * falloff(p.y, waves[i], .5, 1.125);
                if (p.y < waves[i])
                    out_color += color * falloff(p.y, waves[i], .5, 5.);
            }

            out_color *= .5;
        }
        `

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    if (!vertexShader || !fragmentShader) return

    const programLocal = createProgram(gl, vertexShader, fragmentShader)
    if (!programLocal) return

    gl.useProgram(programLocal)
    setProgram(programLocal)
    setPositionAttributeLocation(gl.getAttribLocation(programLocal, "a_position"))
    setTimeUniformLocation(gl.getUniformLocation(programLocal, "u_time"))
    setResolutionUniformLocation(gl.getUniformLocation(programLocal, "u_resolution"))

    const positionBufferLocal = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferLocal)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    setPositionBuffer(positionBufferLocal)

    function resize() {
      const canvas = canvasRef.current
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl?.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createProgram, createShader])

  const animate = useCallback(() => {
    animationRef.current = requestAnimationFrame(animate)
    render()
  }, [render])

  useEffect(() => {
    if (program && glContext) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, program, glContext])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
}
