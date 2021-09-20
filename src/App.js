import React, { useState } from 'react'

const App = () => {

    const [informacion, setInformacion] = useState([
        {
            nombre: 'juan',
            direccion: 'avenida siempre viva 742'
        },
        {
            nombre: 'maria',
            direccion: 'calle falsa 123'
        }])

    return (
        <div>
            <h1>Hola mundo</h1>
            <u>
                {
                    informacion.map( (item, i) =>(
                        <li key={i}>
                            { item.nombre }
                        </li>
                    ))
                }
            </u>
        </div>
    )
}

export default App

