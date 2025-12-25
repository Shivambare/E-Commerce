export default function Card({ title, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />

      <h3>{title}</h3>
      <p>₹{price}</p>

      <button>Buy Now</button>
    </div>
  )
}
