import './App.css'
import { useState, useEffect } from 'react'
import WordInputSearch from './components/WordInputsearch/WordInputSearch'
import WordCard from './components/WordCard/WordCard'

function App() {
  const [data, setData] = useState(null)
  const [darkMode, setDarkMode] = useState(true)

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
      <h1>Learn a new word</h1>
      <button onClick={() => setData(null)}>Twirl the magic wand</button>
      <WordInputSearch setData={setData} />
      {Array.isArray(data) &&
        data.map((wordData, index) => (
          <WordCard key={index} wordData={wordData} />
        ))}
    </div>
  )
}

export default App
