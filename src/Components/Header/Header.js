import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconUser from "../../Assets/Imgs/Icon-User.svg";
import { logout } from '../../Reducers/UserSlice';
import logo from '../../Assets/Imgs/logo_123projetei.webp'
import './Header.css'

const Header = () => {
  const user = useSelector((state) => state.userReducer);
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
      </div>
    </header>
  );
};

export default Header;