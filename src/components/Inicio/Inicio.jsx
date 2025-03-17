import { Link } from 'react-router-dom';
import styles from './Inicio.module.scss'

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// Imagens
import foto from "../../assets/Images/foto.jpg"
import foto2 from "../../assets/Images/foto2.jpg"

const Inicio = () => {
  return (
    <section id='top' className={styles.containerInicio}>
      <div className={`${styles.div} ${styles.divDescription}`}>
        <p>Bem-vindo ao meu Mundo</p>
        <h1>Me chamo <span>Pedro T.V</span></h1>
        <h2>Desenvolvedor Full-Stack</h2>

        <p className={styles.description}>focado na criação de aplicações
          de alto valor e impacto social. Dedicado,
          organizado e sempre buscando aprimorar minhas habilidades,
          compartilhando conhecimento e colaborando com aqueles ao meu redor
          para entregar projetos de alta qualidade.</p>

        <div className={styles.linkSociais}>
          <Link to={"https://www.linkedin.com/in/pedro-thomazi-viannini/"} target='_blank'><FaLinkedinIn size={25} /></Link>
          <Link to={"https://github.com/Pedro-Thomazi"} target='_blank'><FaGithub size={25} /></Link>
        </div>
      </div>

      <div className={`${styles.div} ${styles.containerImg}`}>
        <img className={styles.foto} src={foto} alt="Foto de um desenvolvedor" />
      </div>
    </section>
  )
}

export default Inicio
