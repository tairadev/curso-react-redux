import React from 'react';

const IndiretaFilho = (props) => {
  const cb = props.quandoClicar;
  const max = 90;
  const min = 18;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => cb('João', gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
