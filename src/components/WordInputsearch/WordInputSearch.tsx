import React, { useState } from 'react'
import { WordData } from '../WordCard/types'

interface WordInputSearchProps {
  setData: React.Dispatch<React.SetStateAction<WordData[] | null>>
}

const WordInputSearch: React.FC<WordInputSearchProps> = ({ setData }) => {
  const [input, setInput] = useState('')

  const fetchWordData = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    )
    const data = await response.json()

    if (Array.isArray(data)) {
      // Filter out duplicates
      const uniqueData = data.filter(
        (v, i, a) => a.findIndex((t) => t.word === v.word) === i
      )
      setData(uniqueData)
    } else {
      // Handle error
      console.error(data)
      setData(null)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchWordData}>Search</button>
    </div>
  )
}

export default WordInputSearch
