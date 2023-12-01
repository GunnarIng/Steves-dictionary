import { useEffect, useState } from 'react'
import './App.css'
import WordCard from './components/WordCard/WordCard'
import { WordData } from './components/WordCard/types'
import WordInputSearch from './components/WordInputsearch/WordInputSearch'

// This is the main app that will be used to search for words
function App() {
  const [data, setData] = useState<WordData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  // This is for the dark mode button
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return (
    <div>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        Switch to {darkMode ? 'light' : 'dark'} mode
      </button>
      <div className="title">
        <h1>Steves Dictionary</h1>
      </div>
      <WordInputSearch setData={setData} setError={setError} />

      {error && <p>{error}</p>}
      {Array.isArray(data) &&
        data.map((wordData: WordData, index: number) => (
          <WordCard key={index} wordData={wordData} />
        ))}
    </div>
  )
}

export default App
