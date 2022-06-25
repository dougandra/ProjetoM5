import { useEffect, useState } from "react";
import "./Home";
import styled from 'styled-components';
import styles from "../Home/Home.module.css";
import Loader from "../../components/loading/Loader";
import Buscador from "../../components/Buscador/Buscador";
import Produtos from "../../components/Produtos/Produtos";


const Title = styled.h1`
  padding-top: 20px;
  font-size: 30px;
  color: white;
`

function Home() {
  const [loader, setLoader] = useState(true);
  const [busca,setBusca] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
   
      <div className={!loader ? "disabled" : ""}>
        <Loader />
      </div>

      <main className={loader ? "disabled" : ""}>
       <Title>Bem vindos à G1 Info Store</Title>
      </main>
      
      <div className={loader ? "disabled" : ""}>
      <Buscador busca={busca} setBusca={setBusca}/>
      </div>

      <div className={loader ? "disabled" : ""}>
      <Produtos busca={busca} />
      </div>
    </>
  );
}

export default Home;
