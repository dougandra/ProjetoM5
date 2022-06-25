import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import styles from './Formulario.module.css'

const Formulario = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 10px;
    `

const Label = styled.label`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff;
    font-size: 18px;
`

const Response = styled.h3`
    position: absolute;
    bottom: -25px;
    color: #fff;
`

export default ({tipo}) => {
    const [ID, setID] = useState();
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [preço, setPreço] = useState();
    const [tipoInput, setTipoInput] = useState('');
    const [modal, setModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        switch(tipo) {
            case 'cadastrar':
                try {
                    axios.post(`https://projeto-final-m4.herokuapp.com/hardware`, {nome: nome, marca: marca, preço: preço, tipo: tipoInput})
                    .then(response => {
                        console.log(response)
                        })
                } catch (err) {
                    console.error(err);
                }
                break;
            case 'editar':
                try {
                    axios.put(`https://projeto-final-m4.herokuapp.com/hardware`, {id: ID, nome: nome, marca: marca, preço: preço, tipo: tipoInput})
                    .then(response => {
                        console.log(response)
                        })
                } catch (err) {
                    console.error(err);
                }
                break;
            case 'deletar':
                try {
                    axios.delete(`https://projeto-final-m4.herokuapp.com/hardware/${ID}`)
                    .then(response => {
                        console.log(response)
                        })
                } catch (err) {
                    console.error(err);
                }
                break;
            default:
                break;
        }
        setModal(true);
        setTimeout(() => {
            setModal(false);
        }, 3000)
    }

  return (
      <>
    {tipo === '' ? '' : <Formulario onSubmit={handleSubmit}>
        {tipo === 'editar' || tipo === 'deletar' ? <Label>
            ID:
            <input
                type="number"
                name="id"
                placeholder="ID do produto"
                onChange={e => setID(e.target.value)}
            />
        </Label> : ''}
        {tipo === 'deletar' ? '' : <>
        <Label>
            Nome:
            <input
                type="text"
                name="nome"
                placeholder="Nome do produto"
                onChange={e => setNome(e.target.value)}
            />
        </Label>
        <Label>
            Marca:
            <input
                type="text"
                name="marca"
                placeholder="Marca do produto"
                onChange={e => setMarca(e.target.value)}
            />
        </Label>
        <Label>
            Preço:
            <input
                type="number"
                name="preço"
                placeholder="Preço do produto"
                onChange={e => setPreço(e.target.value)}
            />
        </Label>        
        <Label>
            Tipo:
            <input
                type="text"
                name="tipo"
                placeholder="Nome do produto"
                onChange={e => setTipoInput(e.target.value)}
            />
        </Label>
        </>
        }
        <button
            type="submit"
            className={styles.button}
            >
            {" "}
            <span></span>
            <span></span>
            <span></span>
            <span></span> Enviar
        </button>
        {modal ? <Response>Requisição realizada com sucesso.</Response> : ''}
            
    </Formulario>}
    </>
  )
}