import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} is in your cart.
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart