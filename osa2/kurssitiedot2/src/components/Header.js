import React from 'react'

const Header = ({name}) => {
    console.log('Header log ----', name)
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}
export default Header;