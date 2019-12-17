import React from 'react'

const Part = ({part}) => {
    console.log('Parts log ----', part.name)
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}
export default Part;