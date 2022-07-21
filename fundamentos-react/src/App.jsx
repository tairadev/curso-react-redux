import './App.css';
import React from 'react';

import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
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
        <Card titulo='#08 - Renderização condicional' color='#3A9AD9'>
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: 'Guilherme' }} />
          <UsuarioInfo usuario={{ email: 'guilhermeht1906@gmail.com' }} />
        </Card>

        <Card titulo='#07 - Desafio Repetição' color='#3A9AD9'>
          <TabelaProdutos />
        </Card>

        <Card titulo='#06 - Repetição' color='#FF4C65'>
          <ListaAlunos />
        </Card>

        <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
          <Familia sobrenome='Taira'>
            <FamiliaMembro nome='Gustavo' />
            <FamiliaMembro nome='Guilherme' />
            <FamiliaMembro nome='Carla' />
            <FamiliaMembro nome='Maurício' />
          </Familia>
        </Card>

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
  );
};

export default App;
