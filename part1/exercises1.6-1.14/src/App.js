import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const avg = (good - bad)/all
  const posPercent = `${(good/all) * 100} %`
  const header = 'give feedback'
  const stats = 'statistics'

  return (
    <div>
      <Title text={header}/>
      <Button text={'good'} handleClick={() => setGood(good + 1)}/>
      <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
      <Button text={'bad'} handleClick={() => setBad(bad + 1)}/>
      <Title text={stats}/>
      <Stats good={good} bad={bad} neutral={neutral} all={all} avg={avg} posPercent={posPercent}/>
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

const Stats = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <Statline text='good' content={props.good} />
        <Statline text='neutral' content={props.neutral} />
        <Statline text='bad' content={props.bad} />
        <Statline text='all' content={props.all} />
        <Statline text='average' content={props.avg} />
        <Statline text='positive' content={props.posPercent} />
      </div>
    )
  }
}

const Statline = (props) => {
  return (
    <div>
      {props.text} {props.content}
    </div>
  )
}

export default App
