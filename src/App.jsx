import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App