import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import Productscreen from './components/ProductScreen/Productscreen'
function App({ id }) {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<Productscreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
