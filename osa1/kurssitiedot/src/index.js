import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const partList = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
    const exerciseList =[10, 7, 14]

    return (
        <div>
            <Header name={course}/>
            <Content ContentParts={partList} ContentExercises={exerciseList}/>
            <Total exerciseSum={exerciseList}/>
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
            <Part PartParts={props.ContentParts} PartExercises={props.ContentExercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exerciseSum[0] + props.exerciseSum[1] + props.exerciseSum[2]}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p> {props.PartParts[0]} {props.PartExercises[0]} </p>
            <p> {props.PartParts[1]} {props.PartExercises[1]} </p>
            <p> {props.PartParts[2]} {props.PartExercises[2]} </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))