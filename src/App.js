import React from 'react';
import './App.css';
import Container from './componentes/Container/Container'
import Header from './componentes/Header/Header'
const App = () => (
    <div className="App">
        <Header nombreProyecto="Drum Machine"/>
        <div id="drum-machine">
          <Container />
        </div>
    </div>
)

export default App;
