import React from 'react';

const Botoes = ({ decrementar, incrementar }) => {
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <div></div>
    </div>
  );
};

export default Botoes;
