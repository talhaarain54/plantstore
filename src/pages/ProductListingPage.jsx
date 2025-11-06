import React from 'react'
import plants from '../data/plants'
import ProductCard from '../components/ProductCard'

export default function ProductListingPage() {
  const categories = Array.from(new Set(plants.map(p => p.category)))
  return (
    <main className="products">
      <h2>Products</h2>
      {categories.map(cat => (
        <section key={cat}>
          <h3>{cat}</h3>
          <div className="grid">
            {plants.filter(p => p.category === cat).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      ))}
    </main>
  )
}
