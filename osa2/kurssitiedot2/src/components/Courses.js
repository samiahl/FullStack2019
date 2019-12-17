import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
    console.log(courses)
    const list = () => courses.map((course, index) =>
        <Course
            key={[index]}
            name={course.name}
            parts={course.parts}
        />
    )
    return (
        <div>
            <h1>Web dev curriculum</h1>
            {list()}
        </div>
    )
}
export default Courses