import './App.css'
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    await fetch('https://randomuser.me/api')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw response
      })
      .then(setData)
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => fetchData(), [])

  if (loading) return 'Loading …'
  if (error) return 'Error!'

  return (<>
      <img src={data.results[0].picture.medium} alt="random user"
           title={`Some useful title: ${data.results[0].name.first} ${data.results[0].name.last}`}/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
