import React, {useState} from "react"


function StatisticsLine(props) {
  return (
    <tr>
    {(props.percentage) === true ? (
      <>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </>
    ) : (
      <>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </>
    )}
    </tr>
  )
}

function Statistics(props) {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const all = bad + good + neutral
  const average =  (good - bad) / all
  const positive = (good / all) * 100
  return (
    <>
      <h2>Statistics</h2>
      {((good || bad || neutral) === 0) ? 
      (
      <p>No feedback given</p>
      ) : (
      <table>
        <thead>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average.toFixed(1)}/>
          <StatisticsLine text="positive" value={positive.toFixed(1)} percentage={true} />
        </thead>
      </table>
      )}
      
    </>
  )
}

function Button(props) {
  return (
    <>
    <button onClick={() => props.target(props.value + 1)}>{props.text}</button>
    </>
  )
}
function App() {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button target={setGood} value={good} text="good"/>
      <Button target={setNeutral} value={neutral} text="neutral"/>
      <Button target={setBad} value={bad} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App;
