import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Acordeao from '../../Components/Acordeao/Acordeao';
import Header from '../../Components/Header/Header';
import Popup from '../../Components/Popup/Popup';
import './FrontPage.css'

function FrontPage() {
  const user = useSelector((state) => state.userReducer);
  const [popUp, setPopUp] = useState(false);

  var grupos = user.listPeople.map(function (person, index) {
    return (
      <Acordeao
        key={index}
        numberPerson={index + 1}
        cpf={person.cpf}
        name={person.name}
        lastName={person.lastName}
      />
    )
  })

  return (
    <div className='conteudo'>
      <Header />
      <main className='pessoas'>
        <section className='pessoas-introducao'>
          <h1>Bem vindo ao portal de cadastro de pessoas físicas</h1>
          <p>
            Aqui será apresentado todas as pessoas em que foram realizados o cadastro,
            podendo <strong>visualizar</strong> e <strong>editar</strong> as informações sobre elas e a opção de <strong>adicionar</strong> novas pessoas
          </p>
          <hr />
        </section>

        <section className='pessoas-conteudo'>
          <h2>Pessoas Cadastradas:</h2>
          {grupos}
        </section>
        <button className='bt-completo' onClick={() => setPopUp(true)}>Adicionar Pessoa</button>

      </main>

      <Popup edit={false} trigger={popUp} setTrigger={setPopUp} />
    </div>

  );
}

export default FrontPage;