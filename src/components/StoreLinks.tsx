import React from 'react'

const StoreLinks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Nossas Lojas Online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://ioursmid.github.io/alfaprime"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors group"
            tabIndex={0}
            aria-label="Loja para negativados - Pagamento no boleto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Loja para Negativados
            </h3>
            <p className="text-gray-300 mb-4">
              Compre seu smartphone mesmo com restrições.
              Pagamento facilitado no boleto.
            </p>
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
              Visitar loja →
            </span>
          </a>
          
          <a
            href="https://www.dinamicasalfa.com/iphones"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors group"
            tabIndex={0}
            aria-label="Loja de iPhones"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Loja de iPhones
            </h3>
            <p className="text-gray-300 mb-4">
              Os melhores iPhones com garantia e procedência.
              Entrega para todo Brasil.
            </p>
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
              Visitar loja →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export { StoreLinks } 