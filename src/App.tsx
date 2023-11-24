import './App.css'
import React, { useState, useEffect } from 'react'
import WordInputSearch from './components/WordInputSearch/WordInputSearch'
import WordCard from './Components/WordCard/WordCard'

function App() {
  const [data, setData] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return (
    <div>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        Switch to {darkMode ? 'light' : 'dark'} mode
      </button>
      <WordInputSearch setData={setData} />
      {Array.isArray(data) &&
        data.map((wordData, index) => (
          <WordCard key={index} wordData={wordData} />
        ))}
    </div>
  )
}

export default App
