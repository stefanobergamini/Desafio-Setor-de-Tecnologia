import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePerson } from "../../Reducers/UserSlice";
import './Popup.css'

const PopupEdit = ({ index, trigger, setTrigger }) => {
  const { listPeople } = useSelector((state) => state.userReducer);
  const [form, setForm] = useState({ name: listPeople[index].name, lastName: listPeople[index].lastName, cpf: listPeople[index].cpf });
  const dispatch = useDispatch();

  const refreshLocalStorage = () => {
    const peoples = JSON.parse(localStorage.getItem("peoples"))
    peoples[index].name = form.name
    peoples[index].lastName = form.lastName
    peoples[index].cpf = form.cpf
    localStorage.setItem("peoples", JSON.stringify(peoples))
  }
  
  const updateThisPerson = (e) => {
    e.preventDefault()    
    dispatch(updatePerson({
      index: index,
      name: form.name,
      lastName: form.lastName,
      cpf: form.cpf
    }))

    refreshLocalStorage()
    
    setTrigger(false)
  }
  
  const changeForm = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
  }

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Cadastro</h2>
        <p>Insira os dados da pessoa a ser cadastrada</p>
        <form onSubmit={(e) => updateThisPerson(e)}>
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
          <button type="button" className="bt bt-vazado" onClick={() => setTrigger(false)}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  ) : ""
};

export default PopupEdit;