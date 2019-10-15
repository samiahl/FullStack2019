import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header name={course}/>
            <Content partList={parts} />
            <Total exerciseSum={parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part parts={props.partList[0].name} exes={props.partList[0].exercises} />
            <Part parts={props.partList[1].name} exes={props.partList[1].exercises} />
            <Part parts={props.partList[2].name} exes={props.partList[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exerciseSum[0].exercises + props.exerciseSum[1].exercises + props.exerciseSum[2].exercises}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.parts} {props.exes}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))