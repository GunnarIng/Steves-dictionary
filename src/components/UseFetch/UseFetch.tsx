import { useEffect, useState } from 'react'
import { WordData } from '../WordCard/types'

// This is the hook that will be used to search for words
function useFetch(url: string | null) {
  const [data, setData] = useState<WordData[] | null>(null)

  // This is the function that will be used to search for words
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data)
        })
    }
  }, [url])

  return data
}

export default useFetch
