import React from 'react'

const cardInfo = ({item , i}) => {
    return (
        <li key={i}>
            { item.nombre }
        </li>
    )
}

export default cardInfo
