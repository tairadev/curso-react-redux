import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <aside className='Menu'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Início</Link>
          </li>
          <li>
            <Link to='/param/123'>Parâmetros #01</Link>
          </li>
          <li>
            <Link to='/param/456'>Parâmetros #02</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
          <li>
            <Link to='/naoExiste'>Não existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
