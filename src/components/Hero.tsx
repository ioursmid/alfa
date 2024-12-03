import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background com gradiente e efeito de vidro */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
      
      {/* Efeito de partículas ou grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            AlfaPrime
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            Especialistas em iPhones e Xiaomi
          </p>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Mais de 4 anos de experiência em vendas e manutenção de smartphones.
            Qualidade e confiança que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105 hover:shadow-xl shadow-blue-500/25"
              tabIndex={0}
              aria-label="Conheça nossos serviços"
            >
              Conheça Nossos Serviços
            </a>
            <a
              href="#contact"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105 border border-gray-700 hover:border-gray-600"
              tabIndex={0}
              aria-label="Entre em contato"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero } 