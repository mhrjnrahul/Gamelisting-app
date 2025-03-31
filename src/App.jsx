import React, { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} min-h-screen`}>
      <Header />
      <Home />
    </div>
  )
}

export default App