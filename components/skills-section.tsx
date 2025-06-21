"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Skill } from "@/lib/data"

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">
          <span className="text-golden neon-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-golden/50 transition-all duration-300 text-center backdrop-blur-sm relative z-10"
              >
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-golden mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-golden font-semibold tracking-wide">{skill.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
