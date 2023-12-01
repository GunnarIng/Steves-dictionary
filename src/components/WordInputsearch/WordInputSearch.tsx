import React, { useState } from 'react'
import { WordData } from '../WordCard/types'

interface WordInputSearchProps {
  setData: React.Dispatch<React.SetStateAction<WordData[] | null>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
}

// This is the search bar that will be used to search for words
const WordInputSearch: React.FC<WordInputSearchProps> = ({
  setData,
  setError,
}) => {
  const [input, setInput] = useState('')

  const fetchWordData = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      // Fetch data from API
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      )

      if (!response.ok) {
        throw new Error(
          `Error: ${response.status} - Word does not exist in the dictionary`
        )
      }

      const data = await response.json()

      // Handle response
      if (Array.isArray(data)) {
        // Filter out duplicates
        const uniqueData = data.filter(
          (v, i, a) => a.findIndex((t) => t.word === v.word) === i
        )
        setData(uniqueData)
        setError(null)
      } else {
        // If the data is not an array, handle it as an error
        setError(data.title || 'An unexpected response format')
        setData(null)
      }
    } catch (error) {
      // Handle fetch or parsing error
      setError(error.message || 'An error occurred while fetching data')
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
      <button type="submit">Search</button>
    </form>
  )
}

export default WordInputSearch
