/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './pages/App/App.css';
import { FaLock, FaUser } from 'react-icons/fa6';
//import { useState } from "react";

export const App = () => {

  /*const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");*/

  /*const handleSubmit (event) => {
    event.preventDefault();
    console.log("Envio");
    }*
   console.log(username);
  console.log(password);
  */
   return (

    <div className="container">
      
      <div className="login">

        <form className="login-form" >

          <h1>Acesse o sistema. [ º_º ]</h1>

         <div className="input-field">
            <input type="email" placeholder="E-mail" />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
             <input type="password" placeholder="Senha"
             />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox"/>
              Lembre de mim
            </label>
            <a href="#" target="_blank">Esqqueceu a senha? [ º_º ]</a>
          </div>

          <button>Entrar</button>

          <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Registre-se</a></p>
          </div>

        </form>
        
      </div>

    </div>
    
  );
}

export default App;