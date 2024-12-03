import React from 'react'

interface Review {
  name: string
  rating: number
  comment: string
  date: string
}

const reviews: Review[] = [
  {
    name: 'João Silva',
    rating: 5,
    comment: 'Excelente atendimento! Consertaram meu iPhone no mesmo dia.',
    date: '15/03/2024'
  },
  {
    name: 'Maria Santos',
    rating: 5,
    comment: 'Comprei meu Xiaomi na loja e estou muito satisfeita. Preço justo e ótimo atendimento!',
    date: '10/03/2024'
  },
  {
    name: 'Pedro Oliveira',
    rating: 5,
    comment: 'Profissionais muito competentes. Resolveram o problema do meu celular rapidamente.',
    date: '05/03/2024'
  }
]

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Avaliações dos Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl text-white font-bold">
                    {review.name[0]}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-2">{review.comment}</p>
              <span className="text-gray-400 text-sm">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Reviews } 