import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Anecdote = (props) => {
    return (
        <div>
            <div>{props.anecdote}</div>
            <div>Has {props.votes} votes</div>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array.apply(null, Array(6)).map(Number.prototype.valueOf,0))

    const handleRandomClick = () => {
        const nro = anecdotes.length
        setSelected(Math.floor(Math.random() * Math.floor(nro)))
    }
    const handleVoteClick = selected => {
        console.log(selected)
        console.log(votes)
        return () => {
            const copy = [...votes]
            copy[selected] += 1
            setVotes(copy)
        }
    }

    return (
        <div>
            <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]}/>
            <Button onClick={handleVoteClick(selected)} text='vote' />
            <Button onClick={handleRandomClick} text='next anecdote'/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
