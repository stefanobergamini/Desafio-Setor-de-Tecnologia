import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconUser from "../../Assets/Imgs/Icon-User.svg";
import iconUserMobile from "../../Assets/Imgs/Icon-User-Mobile.svg";
import IconMenu from '../../Assets/Imgs/Icon-Menu.svg'
import IconClose from '../../Assets/Imgs/Icon-Close.svg'
import { logout } from '../../Reducers/UserSlice';
import logo from '../../Assets/Imgs/logo_123projetei.webp'
import './Header.css'

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const [state, setState] = useState(false)
  const dispatch = useDispatch();

  const logoutClick = () => {
    localStorage.removeItem("token")
    dispatch(logout(null))
  }
  return (
    <header className="header-interno">
      <div className="container">
        <div>
          <img src={logo} alt="Logo a ser selecionado" />
        </div>
        <div className="saida">
          <img src={iconUser} alt="" />
          <div><span>{user.name}</span> - <button onClick={logoutClick}>Logout</button></div>
        </div>
        <button className="bt-mobile" onClick={() => setState(!state)}> {!state ? <img src={IconMenu} alt="" /> : <img src={IconClose} alt="" />} </button>

        {state && <div className="menu-mobile">
          <div className={state ? "overlay active" : "overlay"}></div>
          <ul className={state ? "active" : ""}>
            <li>
              <img src={iconUserMobile} alt="" />
              <span>{user.name.split(" ")[0]}</span>
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