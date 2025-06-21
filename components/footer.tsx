"use client"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} 🔥 Row.</p>
      </div>
    </footer>
  )
}
