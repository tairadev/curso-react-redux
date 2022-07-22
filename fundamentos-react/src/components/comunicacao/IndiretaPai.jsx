import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = (props) => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  const fornecerInformacoes = (nomeParam, idadeParam, nerdParam) => {
    setNome(nomeParam);
    setIdade(idadeParam);
    setNerd(nerdParam);
  };

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
