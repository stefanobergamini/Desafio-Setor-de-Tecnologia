import React, { useState } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch } from 'react-redux';
import { removePerson } from '../../Reducers/UserSlice';
import Popup from '../Popup/Popup';
import './Acordeao.css'

const Acordeao = (props) => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();

  const deleteFromLocalStorage = () => {
    let peoples = JSON.parse(localStorage.getItem("peoples"))
    peoples.splice(props.numberPerson - 1, 1)
    localStorage.setItem("peoples", JSON.stringify(peoples))
  }

  const deletePerson = () => {
    dispatch(removePerson(props.numberPerson - 1))
    deleteFromLocalStorage()
  }

  return (
    <div className="grupo">

      <Accordion className='acordeao'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p><strong>{props.name + " " + props.lastName}</strong></p>
        </AccordionSummary>

        <AccordionDetails>
          <div className="dados">
            <h4>Nome: <strong>{props.name}</strong></h4>
            <hr />
            <div>
              <p>Sobrenome: <strong>{props.lastName}</strong></p>
              <p> CPF: <strong>{props.cpf}</strong></p>
            </div>
          </div>
        </AccordionDetails>

        <div className="botoes">
          <button type="button" className="bt-editar" onClick={() => setPopUp(true)}>
            Editar dados
          </button>
          <button type="button" className="bt" onClick={deletePerson}>
            Apagar cadastro
          </button>
        </div>

      </Accordion>
      <Popup edit={true} index={props.numberPerson - 1} trigger={popUp} setTrigger={setPopUp} />
    </div>
  );
};

export default Acordeao;