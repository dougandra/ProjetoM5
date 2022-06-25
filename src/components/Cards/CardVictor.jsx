import React from "react";
import styles from "./Card.module.css";
import victor from "../../Assets/img/Victor.png";
import linkedin from "../../Assets/img/linkedin.png";
import github from "../../Assets/img/github.png";

const CardVictor = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={victor} className={styles.imgPerfil} />
        <h2>Victor Barros</h2>
        <p>
          Desenvolvedor Web em formação | HTML | CSS | JavaScript | SQL | Git
        </p>
        <div className={styles.icones}>
          <a href="https://www.linkedin.com/in/victorjcbarros/" target="_blank">
            <img src={linkedin} className={styles.icone} />
          </a>
          <a href="https://github.com/victorb26" target="_blank">
            <img src={github} className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardVictor;
