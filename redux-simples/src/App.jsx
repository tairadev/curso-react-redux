import './App.scss';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

const App = () => {
  return (
    <div className='App'>
      <h1>Exercício React-Redux</h1>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha'>
        <Soma />
        <Media />
        <Sorteio />
      </div>
    </div>
  );
};

export default App;
