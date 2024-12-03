import React, { useState } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-4">
            <div className="relative w-auto h-auto">
              <Image
                src="/logo.png"
                alt="AlfaPrime Logo"
                width={180}
                height={60}
                className="object-contain"
                priority
                style={{ width: 'auto', height: '60px' }}
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#location" className="text-gray-300 hover:text-white transition-colors">
              Localização
            </a>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#location"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Localização
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export { Header } 