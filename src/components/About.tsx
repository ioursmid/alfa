import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              Mais de 4 Anos de Experiência
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Somos especialistas em vendas de iPhones e Xiaomi, oferecendo os melhores produtos
              com garantia e procedência.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Nossa equipe de técnicos altamente qualificados realiza manutenção em aparelhos
              de todas as marcas e modelos.
            </p>
            <div className="bg-blue-600 inline-block px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-white">⭐ 5.0</span>
              <span className="text-blue-200 ml-2">Avaliação no Google</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">4+</h3>
                <p className="text-gray-300">Anos de Experiência</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-300">Satisfação</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">24h</h3>
                <p className="text-gray-300">Atendimento</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">5⭐</h3>
                <p className="text-gray-300">Avaliação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About } 