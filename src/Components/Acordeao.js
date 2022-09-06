import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch } from 'react-redux';
import { removePerson } from '../Reducers/UserSlice';

const Acordeao = (props) => {
  const dispatch = useDispatch();

  console.log(props)

  const deletePerson = () => {
    dispatch(removePerson(props.numberPerson - 1))
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
          <button type="button" className="bt bt-solid">
            Editar dados
          </button>
          <button type="button" className="bt bt-vazado" onClick={deletePerson}>
            Apagar cadastro
          </button>
        </div>

      </Accordion>
    </div>
  );
};

export default Acordeao;