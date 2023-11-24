import React, { useState } from 'react'
import WordInputSearch from './components/WordInputSearch/WordInputSearch'
import WordCard from './Components/WordCard/WordCard'
function App() {
  const [data, setData] = useState(null)

  return (
    <div>
      <WordInputSearch setData={setData} />
      {Array.isArray(data) &&
        data.map((wordData, index) => (
          <WordCard key={index} wordData={wordData} />
        ))}
    </div>
  )
}

export default App
