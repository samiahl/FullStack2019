import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from "./Total"

const Course = ({name, parts}) => {
    console.log('Course log ----',name, parts)
    return (
        <div>
            <Header name={name}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}
export default Course