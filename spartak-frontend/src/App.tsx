import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [hraci, setHraci] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8000/hraci')
      .then(res => res.json())
      .then(data => setHraci(data))
  }, [])

  console.log(hraci)

  return (
    <div>
       <h1>Spartak Trnava</h1>
       {hraci.map((hrac) => <p>{hrac.meno}, goly: {hrac.hodnota}</p>)}
    </div>
  )
}

export default App