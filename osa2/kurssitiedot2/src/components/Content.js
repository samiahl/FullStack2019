import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    console.log('Content log ----', parts)

    const partList = () => parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />
    )

    return (
        <div>
            {partList()}
        </div>
    )
}
export default Content;