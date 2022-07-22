import React from 'react';

const PassoForm = ({ passo, setPasso }) => {
  return (
    <div>
      <label htmlFor='passoInput'>Passo:</label>
      <input type='number' id='passoInput' value={passo} onChange={setPasso} />
    </div>
  );
};

export default PassoForm;
