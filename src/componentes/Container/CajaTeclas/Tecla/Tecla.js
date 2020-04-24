import React, {Component, createRef} from 'react'
import './_tecla.scss'
import Data from '../../Data'

// const nombreClase = "presionado";

class Tecla extends Component {
    state = {
        audio: createRef(),
        cajaAudio: createRef()
    }

    escucharAudio = () => {
        this.state.audio.current.play();
        this.props.cambioNombre(this.state.cajaAudio.current.id)
    }

    componentDidMount(){
        document.addEventListener ('keydown',(e) => {
            const id = e.key.toUpperCase();
            const audio = document.getElementById(id);
            if(audio){
                const box = audio.parentNode;
                box.classList.add("presionado");
                audio.currentTime = 0;
                audio.play();
                this.props.cambioNombre(Data.filter(sound => sound.letra === id)[0].nombre);
                audio.addEventListener('ended',() => {
                    box.classList.remove("presionado")
                })
            }
        });

    }
   
    render(){

        return(
            
            <div  ref={this.state.cajaAudio}  className="drum-pad" id={this.props.nombre} onClick={this.escucharAudio} >
                <label>{this.props.letra}</label>
                <audio ref={this.state.audio} src={this.props.audio} id={this.props.id}  className="clip"/>
            </div>
        )
    }
};



export default Tecla