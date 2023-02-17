import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import context from '../context/Context';

function Inicio() {

  const { emailContext } = useContext(context)

  return (
    <section>
      <h1>Mercado Livre Clone</h1>
      {!emailContext && (<Link to="/login"><button>Login</button></Link>)}
      {emailContext && (<h1>{emailContext}</h1>)}
    </section>
  )
}

export default Inicio;
