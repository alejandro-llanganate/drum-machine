import React from 'react'
import Tecla from './Tecla/Tecla'
import './_cajaTeclas.scss'
import Data from '../Data'

class CajaTeclas extends React.Component{ 
    state = {
        nombreSonidoActual: this.props.texto
    }
    
    cambiarTexto = _ => {
        this.props.camioScreen("s")
    }

    render(){
        
        const teclas = Data.map((item, key) => (<Tecla letra={item.letra} key={key} id={item.letra} audio={item.sonido} nombre={item.nombre} cambioNombre={this.props.cambioScreen}/>))

        return(
            <div className="cajaTeclas-container" >
              {teclas}
            </div>
            )
    }
}
export default CajaTeclas