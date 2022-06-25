import React from "react";
import styles from "./Card.module.css";
import maria from "../../Assets/img/Maria.png";
import linkedin from "../../Assets/img/linkedin.png";
import github from "../../Assets/img/github.png";

const CardMaria = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={maria} className={styles.imgPerfil} />
        <h2>Maria Santana</h2>
        <p>
        Desenvolvedora Full Stack | HTML | CSS | Javascript | React | SQLt
        </p>
        <div className={styles.icones}>
          <a
            href="https://www.linkedin.com/in/santanamariarita/"
            target="_blank"
          >
            <img src={linkedin} className={styles.icone} />
          </a>
          <a href="https://github.com/55021" target="_blank">
            <img src={github} className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMaria;
