import React, { useState } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch } from 'react-redux';
import { removePerson } from '../Reducers/UserSlice';
import Popup from './Popup/Popup';

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
      <h3>Pessoa cadastrada {props.numberPerson}</h3>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Informações da pessoa {props.name}</p>
        </AccordionSummary>

        <AccordionDetails>
          <div className="dados">
            <h4>{props.name}</h4>
            <p>
              <span>{props.lastName}</span>
              <span>{props.cpf}</span>
            </p>
          </div>
        </AccordionDetails>

        <div className="botoes">
          <button type="button" className="bt bt-solid" onClick={() => setPopUp(true)}>
            Editar dados
          </button>
          <button type="button" className="bt bt-vazado" onClick={deletePerson}>
            Apagar cadastro
          </button>
        </div>

      </Accordion>
      <Popup edit={true} index={props.numberPerson-1} trigger={popUp} setTrigger={setPopUp} />
    </div>
  );
};

export default Acordeao;