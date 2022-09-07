import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../Reducers/UserSlice";
import './Popup.css'

const Pupup = (props) => {
  const [form, setForm] = useState({ name: '', lastName: '', cpf: '' });
  const dispatch = useDispatch();
  let peoples = []

  const sendPersonToLocalStorage = () => {
    if (localStorage.hasOwnProperty("peoples")){
      peoples = JSON.parse(localStorage.getItem("peoples"))
    }
    peoples.push({
      name: form.name,
      lastName: form.lastName,
      cpf: form.cpf
    })
    localStorage.setItem("peoples", JSON.stringify(peoples))
  }
  
  const createPerson = (e) => {
    e.preventDefault()    
    dispatch(addPerson({
      name: form.name,
      lastName: form.lastName,
      cpf: form.cpf
    }))
    sendPersonToLocalStorage()
    setForm({ name: '', lastName: '', cpf: ''})
    props.setTrigger(false)
  }
  
  const changeForm = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
  }

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Cadastro</h2>
        <p>Insira os dados da pessoa a ser cadastrada</p>
        <form onSubmit={(e) => createPerson(e)}>
          <label htmlFor="input-nome">Nome</label>
          <input type="text" id="input-nome" name="name" value={form.name} onChange={changeForm} />

          <label htmlFor="input-sobrenome">Sobrenome</label>
          <input type="text" id="input-sobrenome" name="lastName" value={form.lastName} onChange={changeForm} />

          <label htmlFor="input-cpf">CPF</label>
          <input type="text" id="input-cpf" name="cpf" value={form.cpf} onChange={changeForm} />

          <button type="submit" className="bt bt-solid" >
            Confirmar
          </button>
        </form>
        <div className="botoes">
          <button type="button" className="bt bt-vazado" onClick={() => props.setTrigger(false)}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  ) : ""
};

export default Pupup;