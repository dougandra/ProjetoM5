import React from "react";
import styles from "./Card.module.css";
import giovanni from "../../Assets/img/Giovanni.png";
import linkedin from "../../Assets/img/linkedin.png";
import github from "../../Assets/img/github.png";

const CardGiovanni = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={giovanni} className={styles.imgPerfil} />
        <h2>Giovanni Clayton</h2>
        <p>
          Desenvolvedor Web Full Stack | Front-End | HTML | CSS | JavaScript
        </p>
        <div className={styles.icones}>
          <a
            href="https://www.linkedin.com/in/giovanni-clayton/"
            target="_blank"
          >
            <img src={linkedin} className={styles.icone} />
          </a>
          <a href="https://github.com/Gclayton0207" target="_blank">
            <img src={github} className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardGiovanni;
