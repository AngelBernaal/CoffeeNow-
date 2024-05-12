import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Products from './components/Products'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Products/>
  </React.StrictMode>,
)
