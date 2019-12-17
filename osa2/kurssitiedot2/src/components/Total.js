import React from 'react'

const Total = ({course}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const exercises = []
    course.parts.map(part => exercises.push(part.exercises))
    console.log(exercises)
    const total = exercises.reduce(reducer)
    return (
        <p>Total of {total} exercises</p>
    )
}
export default Total;