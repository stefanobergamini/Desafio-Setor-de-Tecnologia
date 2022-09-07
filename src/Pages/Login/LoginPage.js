import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../Reducers/UserSlice";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { swalAlert } from '../../Helpers/Swal';
import logo from '../../Assets/Imgs/logo_123projetei.webp'
import './LoginPage.css';

function LoginPage() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const changeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fixedName = user.name
    const fixedPassword = user.password

    if (fixedName === form.username && fixedPassword === form.password) {
      var tokenRandom = Math.random().toString(36).substring(2)
      localStorage.setItem("token", tokenRandom)
      dispatch(login(tokenRandom))
    } else {
      swalAlert.fire({
        title: "Credenciais Incorretas!",
        timer: 3000
      });
    }
    setForm({ username: '', password: '' })
  }

  return (
    <div className="Login">
      <img src={logo} alt="Logo - 123Projetei" />
      <form className='Login-form' onSubmit={(e) => handleSubmit(e)}>
        <h1>Realize seu Login aqui</h1>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-user">Usuário</InputLabel>
          <Input
            id="input-user"
            name="username"
            type="text"
            value={form.username}
            onChange={changeForm}
            label="Usuário"
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="input-password">Senha</InputLabel>
          <Input
            id="input-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={changeForm}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <button type="submit" className='bt'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
