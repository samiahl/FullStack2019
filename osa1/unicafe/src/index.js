import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const {onClick, text} = props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = (props) => {
    console.log(props)
    const avg = (props.avg / props.allClicks)
    const pos = (props.good / props.allClicks) * 100
    console.log(avg)
    return (
        <div>
            <div>Good: {props.good}</div>
            <div>Neutral: {props.neutral}</div>
            <div>Bad: {props.bad}</div>
            <div>All: {props.allClicks}</div>
            <div>Average: {avg}</div>
            <div>Positive: {pos} %</div>
        </div>
    )
}

const App = () => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)
    const [ allClicks, setAll ] = useState(0)
    const [ avg, setAvg ] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(allClicks + 1)
        setAvg(avg + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(allClicks + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(allClicks + 1)
        setAvg(avg - 1)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={handleGoodClick} text='good'/>
            <Button onClick={handleNeutralClick} text='neutral'/>
            <Button onClick={handleBadClick} text='bad'/>

            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} avg={avg}/>

        </div>
        )

}

ReactDOM.render(
    <App />,
    document.getElementById('root'));

