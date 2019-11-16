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

const Statistic = ({text, value}) => {
    if (text === 'Positive') {
        return (
            <tr>
                <td>{text}: </td>
                <td>{value} %</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text}: </td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    console.log(props)
    const avg = (props.avg / props.allClicks)
    const pos = (props.good / props.allClicks) * 100

    if (props.allClicks === 0) {
        return (
            <div>No feedback given.</div>
        )
    }
    return (
        <div>
            <Statistic text="Good" value={props.good}/>
            <Statistic text="Neutral" value={props.neutral}/>
            <Statistic text="Bad" value={props.bad}/>
            <Statistic text="All" value={props.allClicks}/>
            <Statistic text="Average" value={avg}/>
            <Statistic text="Positive" value={pos}/>
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

