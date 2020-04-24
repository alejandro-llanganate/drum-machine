import React from 'react'
import CajaTeclas from './CajaTeclas/CajaTeclas'
import './container.scss'
import VistaTono from './VistaTono/VistaTono'

class Container extends React.Component {
    state = {
        textoScreen: ""
    }

    cambiarTexto = texto => {
        this.setState({textoScreen: texto})
    }
    render(){
        return(
            <div className="container">
                <CajaTeclas texto={this.state.textoScreen} cambioScreen={this.cambiarTexto}/>
                <VistaTono texto={this.state.textoScreen}/>
            </div>
        )
    }
}
export default Container