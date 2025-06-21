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
        <div className="flex flex-wrap gap-4 justify-center items-center relative z-20">
          <Button
            className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-golden hover:text-black w-auto flex-shrink-0 relative z-30"
            asChild
          >
            <Link href="mailto:reardenr@gmail.com" className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-golden hover:text-black w-auto flex-shrink-0 relative z-30"
            asChild
          >
            <Link href="https://t.me/MrRowboto" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image
                src={getAssetPath("/telegram-logo.svg") || "/placeholder.svg"}
                alt="Telegram"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              Telegram
            </Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-golden hover:text-black w-auto flex-shrink-0 relative z-30"
            asChild
          >
            <Link
              href="https://njump.me/row@alephia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={getAssetPath("/nostrich-logo.png") || "/placeholder.svg"}
                alt="Nostrich"
                width={36}
                height={24}
                className="w-9 h-6 mr-2"
              />
              Nostr
            </Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-golden hover:text-black w-auto flex-shrink-0 relative z-30"
            asChild
          >
            <Link
              href="https://linkedin.com/in/rowdaboat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-golden text-golden font-semibold px-6 lg:px-8 py-3 neon-button hover:bg-golden hover:text-black w-auto flex-shrink-0 relative z-30"
            asChild
          >
            <Link
              href="https://github.com/RowDaBoat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
