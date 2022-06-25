import React, { useEffect, useState } from "react";
import styles from "../Produtos/Produtos.module.css";
import G1A from "../../Assets/G1A.png";
import axios from "axios";

const Produtos = ({busca}) => {
  const [softwares, setSoftwares] = useState([]);
  const [hardwares, setHardwares] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [lista, setLista] = useState([]);

  
  useEffect(() => {
    async function Api() {
      try {
        const { data } = await axios(
          "https://projeto-final-m4.herokuapp.com/softwares" 
        );
        setSoftwares(data);
        setProdutos([...data])
      
      } catch (err) {
        console.error("ops! ocorreu um erro" + err);
      }
    }
    async function Api2() {
      try {
        const { data } = await axios(
          "https://projeto-final-m4.herokuapp.com/hardwares" 
        );
        setHardwares(data);
        setProdutos((produtosAtuais)=> [...produtosAtuais, ...data])
        
      } catch (err) {
        console.error("ops! ocorreu um erro" + err);
      }
    }
    Api()
    Api2();
    

  }, []);

  useEffect(() => {
    const novaLista = produtos.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()));
    setLista(novaLista);
  }, [busca]);

 return(
   <>{ busca === '' ? 
   <div  className={styles.ProdutosContainer}>
    
   {produtos.length > 0 && produtos.map((produto, index)=> (
        <div key={index}className={styles.card}>
          <div className={styles.card2}>
            <img src={G1A} className={styles.img} />
            <div className={styles.info}>
              <p>{produto.nome}</p>
              
              {/* Condicional inserida pois 
              foi cadastrado sem preço e estava quebrando
              a aplicação */}
              <p>R${produto.preço && !isNaN(produto.preço) &&  produto.preço.toFixed(2).replace(".", ",")}</p>
             
            </div>
            <div className={styles.containerBotom}>
              <button className={styles.button}>
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span> Comprar
              </button>
            </div>
          </div>
          </div>
   ))
        }
 </div>
      : <div  className={styles.ProdutosContainer}>
      {lista.length>0 && lista.map((produto, index)=> (
           <div key={index}className={styles.card}>
             <div className={styles.card2}>
               <img src={G1A} className={styles.img} />
               <div className={styles.info}>
                 <p>{produto.nome}</p>
                 <p>R${produto.preço.toFixed(2).replace(".", ",")}</p>
               </div>
               <div className={styles.containerBotom}>
                 <button className={styles.button}>
                   {" "}
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span> Comprar
                 </button>
               </div>
             </div>
             </div>
      ))
           }
    </div> } </>
    )
    
}

export default Produtos;
