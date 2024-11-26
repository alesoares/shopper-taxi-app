/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Viagem.css';
import '../../pages/pages.css';
import { api } from '../../services/URL';
import { useEffect, useState } from 'react';
import { SiAdobeindesign } from "react-icons/si";
import { FaCaretLeft, FaCaretRight, FaTaxi, FaUser } from 'react-icons/fa6';


export const Viagem = () => {

  /*  useEffect(() => {
        loadMotoristas();
    }, [] );

    async function loadMotoristas() {
        const res = await api.get('/motoristas')
        console.log(res);
    }
*/
  return (
    <div className="container">
      
      <div className="container-home">

        <div className="espaco-vazio"></div>

        <h1>Opções de viagem</h1>

        <div id="map"></div>

        <form className='form_solicitacao_viagem'>
          
          <div className="input-field-form_solicitacao_viagem">
            <input type="number" placeholder="ID :" />
            <SiAdobeindesign className="icon-form_solicitacao_viagem" />
            <FaUser className="icon-form_solicitacao_viagem-user" />
          </div>

          <div className="input-field-form_solicitacao_viagem">
            <input type="text" placeholder="Endereço de origem :" />
            <FaTaxi className="icon-form_solicitacao_viagem" />
            <FaCaretRight className="icon-form_solicitacao_viagem-origem" />  
          </div>
        
          <div className="input-field-form_solicitacao_viagem">
            <input type="text" placeholder="Endereço de destino :" />
            <FaTaxi className="icon-form_solicitacao_viagem" />
            <FaCaretLeft className="icon-form_solicitacao_viagem-destino" />  
          </div>

          <button className="botao-home">Valor da viagem</button>

        </form>

        <div className="espaco-vazio"></div>
                 
      </div>
    
    </div>    
    
  );
};

export default Viagem;


