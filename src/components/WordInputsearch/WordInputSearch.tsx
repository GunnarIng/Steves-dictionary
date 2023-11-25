import React, { useState, useEffect } from 'react'
import useFetch from '../UseFetch/UseFetch'


function WordInputSearch({ setData }) {
  const [inputValue, setInputValue] = useState('initialWord')
  const [word, setWord] = useState('initialWord')
  const { data, loading, error } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setWord(inputValue)
  }

  useEffect(() => {
    setData(data)
  }, [data, setData])

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default WordInputSearch
