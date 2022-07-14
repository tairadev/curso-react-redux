import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

const App = () => {
  return (
    <div className='App'>
      <h1>Fundamentos React (Arrow)</h1>

      <div className='Cards'>
        <Card titulo='#04 - Desafio aleatório' color='#FA6900'>
          <Aleatorio min={1} max={300} />
        </Card>

        <Card titulo='#03 - Fragmento' color='#E94C6F'>
          <Fragmento />
        </Card>

        <Card titulo='#02 - Com parâmetro' color='#E8B71A'>
          <ComParametro 
            titulo='Situação do Aluno' 
            aluno='Pedro Silva' 
            nota={9.2} 
          />
        </Card>

        <Card titulo='#01 - Primeiro' color='#588C73'>
          <Primeiro />
        </Card>
      </div>
      
    </div>
  )
}

export default App;