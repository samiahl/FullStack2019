import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const partList = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
    const exerciseList =[10, 7, 14]
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header name={course}/>
            <Content Content1={part1.name + " " + part1.exercises} Content2={part2.name + " "+ part2.exercises} Content3={part3.name + " "+ part3.exercises}/>
            <Total exerciseSum={part1.exercises + part2.exercises + part3.exercises} />
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

    return (
        <div>
            <Part PartParts={props.Content1} />
            <Part PartParts={props.Content2} />
            <Part PartParts={props.Content3} />
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>Number of exercises {props.exerciseSum}</p>
        </div>
    )
}

const Part = (props) => {

    return (
        <div>
            <p> {props.PartParts} {props.PartExercises} </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))