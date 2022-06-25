import React from "react";
import styles from "./Card.module.css";
import douglas from "../../Assets/img/Douglas.png";
import linkedin from "../../Assets/img/linkedin.png";
import github from "../../Assets/img/github.png";

const CardDouglas = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={douglas} className={styles.imgPerfil} />
        <h2>Douglas Andrade</h2>
        <p>
        Desenvolvedor Web em Formação | JavaScript | React Js | DIO Campus Expert
        </p>
        <div className={styles.icones}>
          <a
            href="https://www.linkedin.com/in/douglasandradez/"
            target="_blank"
          >
            <img src={linkedin} className={styles.icone} />
          </a>
          <a href="https://github.com/dougandra" target="_blank">
            <img src={github} className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDouglas;
