import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course1 = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header course={course1}/>
            <Content partList={course1} />
            <Total exerciseSum={course1} />
        </div>
    )
}

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part parts={props.partList.parts[0].name} exes={props.partList.parts[0].exercises} />
            <Part parts={props.partList.parts[1].name} exes={props.partList.parts[1].exercises} />
            <Part parts={props.partList.parts[2].name} exes={props.partList.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exerciseSum.parts[0].exercises +
                                    props.exerciseSum.parts[1].exercises +
                                    props.exerciseSum.parts[2].exercises
            }</p>
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