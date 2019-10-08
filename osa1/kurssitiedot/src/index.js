import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const partList = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
    const exerciseList =[10, 7, 14]

    return (
        <div>
            <Header name={course}/>
            <Content parts={partList[0]} exercises={exerciseList[0]}/>
            <Content parts={partList[1]} exercises={exerciseList[1]} />
            <Content parts={partList[2]} exercises={exerciseList[2]} />
            <Total exerciseSum={exerciseList}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <p>{props.parts} {props.exercises}</p>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exerciseSum[0] + props.exerciseSum[1] + props.exerciseSum[2]}</p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))