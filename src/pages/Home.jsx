import { useState } from "react"
import Card from "../components/Card"

export default function Home({ search }) {
  const products = [
    {
      id: 1,
      title: "Smart Watch",
      price: "2999",
      image: "https://tse2.mm.bing.net/th/id/OIP.8Js70CPlVBwuwX8HTrJBfAHaG6?pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "Headphones",
      price: "1999",
      image: "https://tse3.mm.bing.net/th/id/OIP.E2KzLGz3OADm2F2ssWuOOwHaE8?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Shoes",
      price: "2499",
      image: "https://tse4.mm.bing.net/th/id/OIP.LnrywNz15HzWmOsiSuvO4AHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Backpack",
      price: "1499",
      image: "https://tse2.mm.bing.net/th/id/OIP.XOHD5dn8aRecbV4Yu55tEwHaHa?pid=Api&P=0&h=180",
    },
  ]

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="container">
      <h1>Featured Products</h1>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </main>
  )
}
