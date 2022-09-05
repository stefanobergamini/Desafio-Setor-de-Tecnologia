import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../Reducers/UserSlice";
import './LoginPage.css';

function LoginPage() {
  const user = useSelector((state) => state.userReducer);
  console.log(user.name)

  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const changeForm = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fixedName = user.name
    const fixedPassword = user.password

    if(fixedName === form.username && fixedPassword === form.password){
      dispatch(login())
      localStorage.setItem("token", 123)
      console.log(form)
    } else {
      alert("erro")
    }

    setForm({ username: '', password: ''})
  }

  return (
    <div className="Login">
      <form className='Login-form' onSubmit={(e) => handleSubmit(e)}>
        <h1>Realize seu Login aqui</h1>
        <input type="text" placeholder='Usuário' name='username' value={form.username} onChange={changeForm} />
        <input type="password" placeholder='Senha' name='password' value={form.password} onChange={changeForm} />
        <button type="submit" className='bt bt-vazado'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
