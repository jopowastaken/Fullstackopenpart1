import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const handleClickGood = () => {
  console.log('Good logged')
  setGood(good + 1)
}
const handleClickNeutral = () => {
  console.log('Neutral logged')
  setNeutral(neutral + 1)
}
const handleClickBad = () => {
  console.log('Bad logged')
  setBad(bad + 1)
}
 // setTimeout(
   // () => setGood(good + 1),
   // 1000
  //)

  
  console.log('rendering...',good)

  return (
    <div>
      <h1>How did you find your restaurant experience?</h1>
      <button onClick={handleClickGood}>
      Good 
      </button>
      <button onClick={handleClickNeutral}>
      Neutral
      </button>
      <button onClick={handleClickBad}>
      Bad
      </button>
      <h1>Statistics</h1> 
      <br />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p> 
      <p>Bad {bad}</p> 
      
    </div>
  )
}

export default App