"use client"

import { Gamepad2, Wrench, Bitcoin } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-black/80 backdrop-blur-sm border-b border-golden/20 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side - Category icons with plus signs */}
        <div className="flex items-center space-x-3">
          <span className="text-golden font-mono text-lg font-bold">let row = </span>
          <Gamepad2
            className="w-6 h-6 text-golden cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,197,0,1)] transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#games")
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
          <span className="text-golden font-mono text-lg font-bold">+</span>
          <Wrench
            className="w-6 h-6 text-golden cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,197,0,1)] transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#tools")
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
          <span className="text-golden font-mono text-lg font-bold">+</span>
          <Bitcoin
            className="w-6 h-6 text-golden cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,197,0,1)] transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#bitcoin")
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

        {/* Right side - Navigation links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#home"
            className="hover:text-golden transition-colors font-mono"
            onClick={() => {
              const element = document.querySelector("#home")
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
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-golden transition-colors font-mono"
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
          </Link>
          <Link
            href="#skills"
            className="hover:text-golden transition-colors font-mono"
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
          </Link>
          <Link
            href="#contact"
            className="hover:text-golden transition-colors font-mono"
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
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
