import React, { useState } from 'react'
import CardInfo from './components/CardInfo'

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
                        <CardInfo item={item} i={i} />
                    ))
                }
            </u>
        </div>
    )
}

export default App

