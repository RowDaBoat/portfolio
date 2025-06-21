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
          <Button
            className="font-semibold px-6 py-3 neon-button border-0"
            style={{ backgroundColor: "#FFC500", color: "#000000" }}
            asChild
          >
            <Link href="mailto:reardenr@gmail.com" className="flex items-center hover:opacity-90">
              <Mail className="w-5 h-5 mr-2" style={{ color: "#000000" }} />
              Email
            </Link>
          </Button>
          <Button
            className="font-semibold px-6 py-3 neon-button border-0"
            style={{ backgroundColor: "#FFC500", color: "#000000" }}
            asChild
          >
            <Link
              href="https://t.me/MrRowboto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <Image
                src={getAssetPath("/telegram-logo.svg") || "/placeholder.svg"}
                alt="Telegram"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
                style={{ filter: "brightness(0)" }}
              />
              Telegram
            </Link>
          </Button>
          <Button
            className="font-semibold px-6 py-3 neon-button border-0"
            style={{ backgroundColor: "#FFC500", color: "#000000" }}
            asChild
          >
            <Link
              href="https://njump.me/row@alephia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <Image
                src={getAssetPath("/nostrich-logo.png") || "/placeholder.svg"}
                alt="Nostrich"
                width={36}
                height={24}
                className="w-9 h-6 mr-2"
                style={{ filter: "brightness(0)" }}
              />
              Nostr
            </Link>
          </Button>
          <Button
            className="font-semibold px-6 py-3 neon-button border-0"
            style={{ backgroundColor: "#FFC500", color: "#000000" }}
            asChild
          >
            <Link
              href="https://linkedin.com/in/rowdaboat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <Linkedin className="w-5 h-5 mr-2" style={{ color: "#000000" }} />
              LinkedIn
            </Link>
          </Button>
          <Button
            className="font-semibold px-6 py-3 neon-button border-0"
            style={{ backgroundColor: "#FFC500", color: "#000000" }}
            asChild
          >
            <Link
              href="https://github.com/RowDaBoat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <Github className="w-5 h-5 mr-2" style={{ color: "#000000" }} />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
