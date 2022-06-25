import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Sobre from "../Pages/Sobre/Sobre"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Painel from '../Pages/Painel/Painel';
import styled from 'styled-components';
import '../index.css';


const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Routes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Switch>
            <Route path='/'  element={<Home />}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/painel' element={<Painel/>}/>
        </Switch>
      <Footer/>
      </Container>
    </BrowserRouter>
  )
}

export default Routes