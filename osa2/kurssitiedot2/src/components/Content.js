import React from 'react'
import Part from './Part'

const Content = ({course}) => {
    console.log('Content log ----', course.parts[0].name)

    const parts = () => course.parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />
    )

    return (
        <div>
            {parts()}
        </div>
    )
}
export default Content;