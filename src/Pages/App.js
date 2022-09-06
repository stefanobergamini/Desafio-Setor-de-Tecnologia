import React from 'react';
import { useSelector } from 'react-redux';
import FrontPage from './FrontPage/FrontPage';
import LoginPage from './Login/LoginPage';

const App = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user.isLoggedIn)

  return (
    <>
      {user.isLoggedIn ? <FrontPage /> : <LoginPage />}
    </>
  );
}

export default App;