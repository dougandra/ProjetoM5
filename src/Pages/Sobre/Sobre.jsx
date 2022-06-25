import React from "react";
import CardGiovanni from "../../components/Cards/CardGiovanni";
import CardMaria from "../../components/Cards/CardMaria";
import CardDouglas from "../../components/Cards/CardDouglas";
import CardVictor from "../../components/Cards/CardVictor";
import CardOthon from "../../components/Cards/CardOthon";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <>
      <h1 className={styles.title}> Equipe G1 info</h1>
      <main>
        <CardGiovanni />
        <CardMaria />
        <CardVictor />
        <CardOthon />
        <CardDouglas />
      </main>
    </>
  );
};

export default Sobre;
