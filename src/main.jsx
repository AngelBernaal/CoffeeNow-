import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Products from './components/Products'
import Snacks from './components/Snacks'
import Card from './components/Card'
import Ubicacion from './components/Ubicacion'
import Contact from './components/Contact'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Products />
    <Snacks />
    <Card />
    <Ubicacion />
    <Contact />
  </React.StrictMode>,
)
