import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro titulo='Situação do Aluno' aluno='Pedro Silva' nota={9.2} />
  </div>,
  document.getElementById('root')
);
