import './Contador.css';
import React, { Component } from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  };

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };

  inc = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value
    });
  };

  render() {
    return (
      <div className='Contador'>
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes decrementar={this.dec} incrementar={this.inc} />
      </div>
    );
  }
}

export default Contador;
