import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio'

const App = () => {
  return (
    <div id='app'>
      <h1>Fundamentos React (Arrow)</h1>
      <Fragmento />
      <ComParametro titulo='Situação do Aluno' aluno='Pedro Silva' nota={9.2} />
      <Primeiro />
      <Aleatorio min={1} max={300} />
    </div>
  )
}

export default App;