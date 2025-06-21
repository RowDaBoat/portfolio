"use client"

import WebGLBackground from "@/components/webgl-background"
import Header from "@/components/header"
import HomeSection from "@/components/home-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { projectCategories, skills, projectGroups } from "@/lib/data"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative" style={{ background: "#000000" }}>
      {/* WebGL Background - Low z-index but positive */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 1, background: "#000000" }}>
        <WebGLBackground />
      </div>

      {/* Header */}
      <Header />

      {/* Home Section */}
      <HomeSection projectGroups={projectGroups} />

      {/* Projects Section */}
      <ProjectsSection projectCategories={projectCategories} />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
