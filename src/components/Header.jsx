import { Link } from "react-router-dom"

export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="logo">🛍️ E-Commerce</div>

      {/* Search */}
      <input
        className="header-search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  )
}
