import React from 'react';

const ParOuImpar = ({ numero }) => {
  return <div>{numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}</div>;
};

export default ParOuImpar;
