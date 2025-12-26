import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ search = "", setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">🛍️ E-Commerce</div>

      {/* Center: Search */}
      <input
        className="header-search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch && setSearch(e.target.value)}
      />

      {/* Right: Hamburger */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
      </nav>
    </header>
  );
}
