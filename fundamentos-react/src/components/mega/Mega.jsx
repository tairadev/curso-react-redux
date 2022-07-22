import './Mega.css';
import React, { useState } from 'react';

const Mega = () => {
  const gerarNumeros = () => {
    if (!quantidade) {
      alert('Preencha a quantidade!');
      return false;
    }
    let arr = [],
      i = 0;

    while (i < quantidade) {
      let aleatorio = Math.floor(Math.random() * (60 - 1 + 1) + 1);
      if (arr.includes(aleatorio) === false) {
        arr[i] = aleatorio;
        i++;
      }
    }
    setNumeros(arr);
  };

  const [numeros, setNumeros] = useState([]);
  const [quantidade, setQuantidade] = useState(6);

  return (
    <div className='Mega'>
      <h2>Mega Sena</h2>
      <div>
        <label htmlFor='megaQtd'>Quantidade:</label>
        <input
          id='megaQtd'
          type='number'
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button onClick={gerarNumeros}>Gerar números</button>
        <h4>{numeros.join(' ')}</h4>
      </div>
    </div>
  );
};

export default Mega;
