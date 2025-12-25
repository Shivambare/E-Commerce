import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}
