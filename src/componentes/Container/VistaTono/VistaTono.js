import React from 'react'
import './vistaTono.scss'

const VistaTono = props => (
    <div className="vistaTono-container" id="display">
    <div className="vistaTono-screen">
        <label>{props.texto}</label>
    </div>
    <div className="vistaTono-img"> 
        <img src="https://d33wubrfki0l68.cloudfront.net/78278bdf3a25d3e5558190b140cca9cbe86471e8/05e51/img/misuse-6.png" alt="Logotipo de FreeCodeCamp" />
    </div>
    </div>
)

export default VistaTono