"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import type { ProjectGroup } from "@/lib/data"

interface HomeSectionProps {
  projectGroups: ProjectGroup[]
}

export default function HomeSection({ projectGroups }: HomeSectionProps) {
  const [showScrollArrow, setShowScrollArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Hide arrow after scrolling 100px
      setShowScrollArrow(scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden z-10 pt-20 pb-20 lg:pt-0 lg:pb-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-golden/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-left order-1 lg:order-1">
              <div className="mb-6 lg:mb-8">
                <div className="w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-6 rounded-full border-2 border-golden neon-border overflow-hidden mx-auto lg:mx-0">
                  <Image
                    src="/avatar.png"
                    alt="Row - Software Engineer & Game Developer"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 tracking-wider text-center lg:text-left">
                <span className="text-golden neon-text">Row</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-3 lg:mb-4 text-gray-300 font-semibold tracking-wide text-center lg:text-left">
                Software Engineer & Game Developer
              </p>
              <p className="text-base lg:text-lg mb-6 lg:mb-8 text-gray-400 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Systems are just tools, product is king.
                <br />
                Lead teams, build, publish, iterate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 lg:mb-0">
                <Button
                  className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-[#FFD700] hover:bg-golden hover:text-black"
                  onClick={() => {
                    const element = document.querySelector("#projects")
                    if (element) {
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - 100 // Account for fixed header
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Projects
                </Button>
                <Button
                  className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-[#FFD700] hover:bg-golden hover:text-black"
                  onClick={() => {
                    const element = document.querySelector("#skills")
                    if (element) {
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - 100 // Account for fixed header
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Skills
                </Button>
                <Button
                  className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-[#FFD700] hover:bg-golden hover:text-black"
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    if (element) {
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - 100 // Account for fixed header
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Project groups overview - Only visible on desktop */}
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-2 hidden lg:block">
              <h3 className="text-xl lg:text-2xl font-bold text-golden neon-text mb-4 lg:mb-6 tracking-wide text-center lg:text-left">
                Projects
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {projectGroups.map((group, index) => {
                  const Icon = group.icon
                  const sectionId =
                    group.title === "Games and Demos"
                      ? "#games"
                      : group.title === "Tools and Libraries"
                        ? "#tools"
                        : "#bitcoin"

                  return (
                    <Card
                      key={index}
                      className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-golden/50 transition-all duration-300 group cursor-pointer relative z-10"
                      onClick={() => {
                        const element = document.querySelector(sectionId)
                        if (element) {
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                          const offsetPosition = elementPosition - 100 // Account for fixed header
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          })
                        }
                      }}
                    >
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-golden group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 lg:mb-2">
                              <CardTitle className="text-lg lg:text-xl text-golden font-semibold tracking-wide">
                                {group.title}
                              </CardTitle>
                              <Badge variant="outline" className="border-golden/30 text-golden font-mono text-xs">
                                {group.count} projects
                              </Badge>
                            </div>
                            <CardDescription className="text-gray-400 text-sm leading-relaxed">
                              {group.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop scroll indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block z-10">
          <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
            <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mobile scroll indicator - Fixed to viewport bottom */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden z-50 transition-all duration-300 ${
          showScrollArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChevronDown
          className="w-8 h-8 text-golden animate-bounce cursor-pointer hover:text-golden/80 transition-colors"
          onClick={() => {
            const element = document.querySelector("#mobile-projects")
            if (element) {
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
              const offsetPosition = elementPosition - 100 // Account for fixed header

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }}
        />
      </div>

      {/* Mobile Project Categories - Separate section below hero */}
      <section id="mobile-projects" className="py-12 relative z-10 lg:hidden">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-golden neon-text mb-8 tracking-wide text-center">Projects</h3>
          <div className="space-y-4">
            {projectGroups.map((group, index) => {
              const Icon = group.icon
              const sectionId =
                group.title === "Games and Demos"
                  ? "#games"
                  : group.title === "Tools and Libraries"
                    ? "#tools"
                    : "#bitcoin"

              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-golden/50 transition-all duration-300 group cursor-pointer relative z-10"
                  onClick={() => {
                    const element = document.querySelector(sectionId)
                    if (element) {
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = elementPosition - 100 // Account for fixed header
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-golden group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg text-golden font-semibold tracking-wide">
                            {group.title}
                          </CardTitle>
                          <Badge variant="outline" className="border-golden/30 text-golden font-mono text-xs">
                            {group.count} projects
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-400 text-sm leading-relaxed">
                          {group.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
