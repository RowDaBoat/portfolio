"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Gamepad2, Wrench, Bitcoin, Play, Globe, Smartphone, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Project, ProjectCategories } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"

interface ProjectsSectionProps {
  projectCategories: ProjectCategories
}

// Reusable ProjectCard component
function ProjectCard({ project, showLicense = false }: { project: Project; showLicense?: boolean }) {
  const renderProjectImage = (project: Project) => {
    if (project.image?.startsWith("TEXT:")) {
      const text = project.image.replace("TEXT:", "")
      return (
        <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
          <span className="text-4xl font-mono text-orange-400 font-bold tracking-wider">{text}</span>
        </div>
      )
    }

    return (
      <Image
        src={getAssetPath(project.image || "/placeholder.svg")}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-golden/50 transition-all duration-300 group flex flex-col backdrop-blur-sm relative z-10">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          {renderProjectImage(project)}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-1">
        <CardTitle className="text-xl mb-2 text-golden font-semibold tracking-wide">{project.title}</CardTitle>
        <CardDescription className="text-gray-400 mb-4 flex-1 whitespace-pre-line">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline" className="border-golden/30 text-golden font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {showLicense && project.license && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-mono">License:</span>
              <Badge
                variant="outline"
                className={`text-xs font-mono ${
                  project.license === "Open Source, ISC"
                    ? "border-green-500/30 text-green-400"
                    : project.license === "Not Public"
                      ? "border-red-500/30 text-red-400"
                      : "border-blue-500/30 text-blue-400"
                }`}
              >
                {project.license}
              </Badge>
            </div>
          </div>
        )}
        <div className="flex gap-3 mt-auto flex-wrap">
          {project.video && (
            <Link
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <Play className="w-4 h-4 mr-2" />
              Video
            </Link>
          )}
          {project.pouet && (
            <Link
              href={project.pouet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <Globe className="w-4 h-4 mr-2" />
              pouet.net
            </Link>
          )}
          {project.itch && (
            <Link
              href={project.itch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              itch.io
            </Link>
          )}
          {project.android && (
            <Link
              href={project.android}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Android
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Link>
          )}
          {project.assetStore && (
            <Link
              href={project.assetStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Asset Store
            </Link>
          )}
          {project.patreon && (
            <Link
              href={project.patreon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Patreon
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 bg-golden hover:bg-[#FFD700] text-black px-3 py-1.5 h-8"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProjectsSection({ projectCategories }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">
          <span className="text-golden neon-text">Projects</span>
        </h2>

        {/* Games Section */}
        <div id="games" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="w-8 h-8 text-golden" />
            <h3 className="text-3xl font-bold text-golden neon-text tracking-wide">Games and Demos</h3>
          </div>
          <p className="text-gray-400 mb-8 text-lg">Self-published games, and demoscene productions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.games.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Tools and Libraries Section */}
        <div id="tools" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-8 h-8 text-golden" />
            <h3 className="text-3xl font-bold text-golden neon-text tracking-wide">Tools and Libraries</h3>
          </div>
          <p className="text-gray-400 mb-8 text-lg">Open source and commercial tools for game development (mostly).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.gamedevTools.map((project, index) => (
              <ProjectCard key={index} project={project} showLicense={true} />
            ))}
          </div>
        </div>

        {/* Bitcoin and Nostr Section */}
        <div id="bitcoin" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Bitcoin className="w-8 h-8 text-golden" />
            <h3 className="text-3xl font-bold text-golden neon-text tracking-wide">Bitcoin & Nostr</h3>
          </div>
          <p className="text-gray-400 mb-8 text-lg">
            Pet projects setting up Bitcoin infrastructure and harnessing Nostr&apos;s power.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.bitcoinNostr.map((project, index) => (
              <ProjectCard key={index} project={project} showLicense={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
