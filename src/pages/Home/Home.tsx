import React from 'react';
import './pages/App/App.css';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

export const App = () => {

    useEffect(() => {
        loadMotoristas();
    }, [] );

    async function loadMotoristas() {
        const res = await api.get('/motoristas')
        console.log(res);
    }

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
};

export default App


