import React from 'react'

const Part = ({part}) => {
    console.log('Parts log ----', part.name)
    return (
            <tr>
                <td>{part.name}</td>
                <td>{part.exercises}</td>
            </tr>


    )
}
export default Part;