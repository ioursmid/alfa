import React from 'react'

interface Service {
  title: string
  description: string
  icon: string
  features?: string[]
}

const services: Service[] = [
  {
    title: 'Vendas de iPhones',
    description: 'Os melhores iPhones com garantia e procedência',
    icon: '📱',
    features: [
      'Modelos mais recentes',
      'Produtos com garantia',
      'Parcelamento facilitado',
      'Melhor custo-benefício'
    ]
  },
  {
    title: 'Smartphones Xiaomi',
    description: 'Linha completa Xiaomi com os melhores preços',
    icon: '📲',
    features: [
      'Toda linha Xiaomi',
      'Preços competitivos',
      'Produtos originais',
      'Garantia de 6 meses diretamente com nossa loja'
    ]
  },
  {
    title: 'Manutenção',
    description: 'Assistência técnica especializada para todas as marcas',
    icon: '🔧',
    features: [
      'Técnicos certificados',
      'Peças da melhor qualidade',
      '6 meses de garantia',
      'Atendimento rápido'
    ]
  },
  {
    title: 'Acessórios Premium',
    description: 'Acessórios de alta qualidade para seu smartphone',
    icon: '🎧',
    features: [
      'Capinhas X-One com garantia de 4 meses',
      'Películas de proteção premium',
      'Fones de ouvido de qualidade',
      'Acessórios originais'
    ]
  }
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Nossos Serviços
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos uma gama completa de produtos e serviços para seu smartphone
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 bg-gradient-to-br from-gray-700 to-gray-600 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features?.map((feature, index) => (
                  <li key={index} className="text-gray-400 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Services } 