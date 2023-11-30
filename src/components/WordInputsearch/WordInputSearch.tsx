import React, { useState } from 'react'
import { WordData } from '../WordCard/types'

interface WordInputSearchProps {
  setData: React.Dispatch<React.SetStateAction<WordData[] | null>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
}

const WordInputSearch: React.FC<WordInputSearchProps> = ({ setData, setError }) => {
  const [input, setInput] = useState('')

  const fetchWordData = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    const data = await response.json()

    if (Array.isArray(data)) {
      // Filter out duplicates
      const uniqueData = data.filter((v, i, a) => a.findIndex((t) => t.word === v.word) === i)
      setData(uniqueData)
      setError(null)
    } else {
      // Handle error
      setError(data.title || 'An error occurred')
      setData(null)
    }
  }

  return (
    <form onSubmit={fetchWordData}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default WordInputSearch