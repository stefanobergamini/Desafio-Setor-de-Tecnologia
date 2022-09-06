import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import iconUser from "../Assets/Imgs/Icon-User.svg";
import iconUserMobile from "../Assets/Imgs/Icon-User-Mobile.svg";
import IconMenu from '../Assets/Imgs/Icon-Menu.svg'
import IconClose from '../Assets/Imgs/Icon-Close.svg'

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const [state, setState] = useState(false)
  return (
    <header className="header-interno">
      <div className="container">
        <div>
          <img src="" alt="Logo a ser selecionado" />
        </div>
        <nav className="nav">
          <div className="exit">
            <img src={iconUser} alt="" />
            <div><span>{user.name}</span> - <button>sair</button></div>
          </div>
        </nav>
        <button className="bt-mobile" onClick={() => setState(!state)}> {!state ? <img src={IconMenu} alt="" /> : <img src={IconClose} alt="" />} </button>

        {state && <div className="menu-mobile">
          <div className={state ? "overlay active" : "overlay"}></div>
          <ul className={state ? "active" : ""}>
            <li>
              <img src={iconUserMobile} alt="" />
              <span>{user.name.split(" ")[0]}</span>
            </li>
            <li>
              <button>Início</button>
            </li>
            <li>
              <button>Minhas negociações</button>
            </li>
            <li>
              <button>Sair</button>
            </li>
          </ul>
        </div>}
      </div>
    </header>
  );
};

export default Header;