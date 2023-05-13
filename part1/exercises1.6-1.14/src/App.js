import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const header = 'give feedback'
  const stats = 'statistics'
  return (
    <div>
      <Title text={header}/>
      <Button text={'good'} handleClick={() => setGood(good + 1)}/>
      <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
      <Button text={'bad'} handleClick={() => setBad(bad + 1)}/>
      <Title text={stats}/>
      <Stats good={good} bad={bad} neutral={neutral}/>
    </div>
  )


}

const Button = (props) => {
  return( 
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Title = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Stats = props => <div>good {props.good} <br></br> neutral {props.neutral} <br></br> bad {props.bad}</div>

export default App
