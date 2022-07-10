import React from 'react';

const Aleatorio = ({min, max}) => {
  const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <>
      <h2>Valor aleatório</h2>
      <p>
        <strong>Valor mínimo: {min}</strong>
      </p>
      <p>
        <strong>Valor máximo: {max}</strong>
      </p>
      <p>
        <strong> O número sorteado foi {aleatorio}</strong>
      </p>
    </>
  )
}

export default Aleatorio;