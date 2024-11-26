/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { URL } from '../../services/URL.ts';
import { useEffect, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { IntegerType } from 'typeorm';

interface AdminProps {
  id: IntegerType;
  admin: string;
  password: string;
  level: IntegerType;
}

export const App = () => {

  const [ admin, setAdmin ] = useState< AdminProps[] >( [] )

  useEffect( () => {
    GetAdmin();
  }, [])
  
  async function GetAdmin() {
    const resp = await URL.get('/admin');
    console.log(resp.data);
  }

  return (

    <div className="container">

      <div className="login">

        <form className="login-form" >

          <h1>Acesse o sistema.</h1>

          <div className="input-field">
            <input type="email" placeholder="E-mail" />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input type="password" placeholder="Senha" />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
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

    </div >
  );
};
    
export default App;


