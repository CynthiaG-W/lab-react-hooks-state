import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
