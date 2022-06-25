import React, { useState } from "react";
import styled from 'styled-components';
import styles from "./Painel.module.css";
import Formulario from '../../components/Formulario/Formulario'

const Title = styled.h1`
  padding-top: 20px;
  font-size: 30px;
  color: white;
  text-align: center;
`

const Wrapper = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    margin: 0 auto;
`

const Painel = () => {
    const [tipo, setTipo] = useState('');

  return (
      <>
        <header>
            <Title>Painel de Controle</Title>
        </header>
        <Wrapper>
            <nav className={styles.painel}>
            <ul>
                <li>
                <span onClick={() => setTipo('cadastrar')}>Cadastrar produtos</span>
                </li>
                <li>
                <span onClick={() => setTipo('editar')}>Atualizar produtos</span>
                </li>
                <li>
                <span onClick={() => setTipo('deletar')}>Deletar produtos</span>
                </li>
            </ul>
            </nav>
            <Formulario tipo={tipo}/>
        </Wrapper>
    </>
    
  );
};

export default Painel;