"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider">
          <span className="text-golden neon-text">Get In Touch</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Let's team up and create games.</p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button className="bg-golden hover:bg-[#FFD700] text-black font-semibold px-6 py-3 neon-button" asChild>
            <Link href="mailto:reardenr@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Link>
          </Button>
          <Button className="bg-golden hover:bg-[#FFD700] text-black font-semibold px-6 py-3 neon-button" asChild>
            <Link href="https://t.me/MrRowboto" target="_blank" rel="noopener noreferrer">
              <Image src={getAssetPath("/telegram-logo.svg")} alt="Telegram" className="w-5 h-5 mr-2 filter brightness-0" />
              Telegram
            </Link>
          </Button>
          <Button className="bg-golden hover:bg-[#FFD700] text-black font-semibold px-6 py-3 neon-button" asChild>
            <Link href="https://njump.me/row@alephia.tech" target="_blank" rel="noopener noreferrer">
              <Image src={getAssetPath("/nostrich-logo.png")} alt="Nostrich" className="w-9 h-6 mr-2 filter brightness-0" />
              Nostr
            </Link>
          </Button>
          <Button className="bg-golden hover:bg-[#FFD700] text-black font-semibold px-6 py-3 neon-button" asChild>
            <Link href="https://linkedin.com/in/rowdaboat" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button className="bg-golden hover:bg-[#FFD700] text-black font-semibold px-6 py-3 neon-button" asChild>
            <Link href="https://github.com/RowDaBoat" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
