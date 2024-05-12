import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Products from './components/Products'
import Snacks from './components/Snacks'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Products />
    <Snacks />
  </React.StrictMode>,
)
