import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateFields } from "../../Helpers/Validations";
import { addPerson, updatePerson } from "../../Reducers/UserSlice";
import InputMask from "react-input-mask";
import { Input } from "@mui/material";
import './Popup.css'

const Pupup = ({ index, trigger, setTrigger, edit }) => {

  const { listPeople } = useSelector((state) => state.userReducer);

  const [name, setName] = useState(!edit ? "" : listPeople[index].name);
  const [lastName, setLastName] = useState(!edit ? "" : listPeople[index].lastName);
  const [cpf, setCpf] = useState(!edit ? "" : listPeople[index].cpf);

  const dispatch = useDispatch();
  let peoples = []

  const refreshLocalStorage = () => {
    const peoplesLocal = JSON.parse(localStorage.getItem("peoples"))
    peoplesLocal[index].name = name
    peoplesLocal[index].lastName = lastName.replace(/(?!\b\s+\b)\s+/g, "")
    peoplesLocal[index].cpf = cpf
    localStorage.setItem("peoples", JSON.stringify(peoplesLocal))
  }

  const sendPersonToLocalStorage = () => {
    if (localStorage.hasOwnProperty("peoples")) {
      peoples = JSON.parse(localStorage.getItem("peoples"))
    }
    peoples.push({
      name: name,
      lastName: lastName.replace(/(?!\b\s+\b)\s+/g, ""),
      cpf: cpf
    })
    localStorage.setItem("peoples", JSON.stringify(peoples))
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (!validateFields(cpf.replaceAll(".", "").replace("-", ""), name, lastName)) {
      console.log("oi")
      return
    }

    if (edit) {
      dispatch(updatePerson({
        index: index,
        name: name,
        lastName: lastName.replace(/(?!\b\s+\b)\s+/g, ""),
        cpf: cpf
      }))
      refreshLocalStorage()
    } else {
      dispatch(addPerson({
        name: name,
        lastName: lastName.replace(/(?!\b\s+\b)\s+/g, ""),
        cpf: cpf
      }))
      sendPersonToLocalStorage()
      setName("")
      setLastName("")
      setCpf("")
    }

    setTrigger(false)
  }

  const changeName = (e) => {
    setName(e.target.value.replace(/[^A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/gi, ""));
  };
  const changeLastName = (e) => {
    setLastName(e.target.value.replace(/[^A-Za-z\s]*$/gi, ""));
  };
  const changeCpf = (e) => {
    setCpf(e.target.value);
  };

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Cadastro</h2>
        <p>Insira os dados da pessoa a ser cadastrada</p>
        <form onSubmit={(e) => submitForm(e)}>
          <div>
            <label htmlFor="input-nome">Nome:</label>
            <Input
              name="name"
              id="input-name"
              placeholder="Nome"
              type="text"
              value={name}
              onChange={changeName}
            />
          </div>

          <div>
            <label htmlFor="input-sobrenome">Sobrenome:</label>
            <Input
              name="lastName"
              id="input-sobrenome"
              placeholder="Sobrenome completo"
              type="text"
              value={lastName}
              onChange={changeLastName}
            />
          </div>
          <div>
            <label htmlFor="input-cpf">CPF:</label>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={changeCpf}
              maskChar=""
            >
              {() => (
                <Input
                  name="cpf"
                  id="input-cpf"
                  placeholder="000.000.000-00"
                  type="tel"
                />
              )}
            </InputMask>
          </div>
          <button type="submit" className="bt" >
            Confirmar
          </button>
        </form>
        <button type="button" className="bt bt-voltar" onClick={() => setTrigger(false)}>
          Voltar
        </button>
      </div>
    </div>
  ) : ""
};

export default Pupup;