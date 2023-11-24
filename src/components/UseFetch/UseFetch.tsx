import { useEffect, useState } from 'react'
import { WordData } from './WordCard/types'

function useFetch(url: string | null) {
  const [data, setData] = useState<WordData[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (url) {
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
