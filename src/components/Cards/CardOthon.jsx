import React from "react";
import styles from "./Card.module.css";
import othon from "../../Assets/img/Othon.png";
import linkedin from "../../Assets/img/linkedin.png";
import github from "../../Assets/img/github.png";

const CardOthon = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={othon} className={styles.imgPerfil} />
        <h2>Othon Botelho</h2>
        <p>
        Graduando em ADS | HTML | CSS | Javascript | Python | Django| SQL |
        </p>
        <div className={styles.icones}>
          <a href="https://github.com/Othonosb" target="_blank">
            <img src={linkedin} className={styles.icone} />
          </a>
          <a href="https://www.linkedin.com/in/othon-botelho-1b0972216/" target="_blank">
            <img src={github} className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOthon;
