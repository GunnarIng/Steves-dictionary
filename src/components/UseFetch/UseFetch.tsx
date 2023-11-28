import { useEffect, useState } from 'react'
import { WordData } from '../WordCard/types'

function useFetch(url: string | null) {
  const [data, setData] = useState<WordData[] | null>(null)

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