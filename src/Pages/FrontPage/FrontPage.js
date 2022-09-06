import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Acordeao from '../../Components/Acordeao';
import Header from '../../Components/Header';
import Popup from '../../Components/Popup/Popup';
import { addPerson } from '../../Reducers/UserSlice';
import './FrontPage.css'

function FrontPage() {
  const user = useSelector((state) => state.userReducer);
  const [popUp, setPopUp] = useState(false);

  var grupos = user.listPeople.map(function (person, index) {
    console.log(person)
    return (
      <Acordeao
        key={index}
        numberPerson={index+1}
        cpf={person.cpf}
        name={person.name}
      />
    )
  })

  return (
    <div>
      <Header />
      <main className='pessoas'>
        <section className='pessoas-introducao'>
          <h1>Bem vindo ao portal de cadastro de pessoas físicas</h1>
          <p>Aqui será apresentado todas as pessoas em que foram realizados o cadastro e a informação sobre elas</p>
          <span></span>
        </section>

        <section className='pessoas-conteudo'>
          {grupos}
          <button onClick={() => setPopUp(true)}>clique aqui</button>
        </section> 

      </main>
      
      <Popup trigger={popUp} setTrigger={setPopUp} />
    </div>
    
  );
}

export default FrontPage;