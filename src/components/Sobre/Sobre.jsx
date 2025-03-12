import styles from './Sobre.module.scss'

// Icons
import { FaListUl } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BsTools } from "react-icons/bs";

const Sobre = () => {
  return (
    <section id='about' className={styles.containerSobre}>
      <p className={styles.title}>Sobre</p>
      <h1>Quem sou Eu?</h1>
      <div className={styles.topcos}>
        <div>
          <FaListUl size={30} />
          <h2>Como Tudo Começo</h2>
          <p>Começei na programação em 2019 com Python, pelos cursos gratuitos do Curso em Vídeo, desde então não parei mais. Já passei pelos principais frameworks front-end como React.js, Angular.js, Bootstrap, entre outros e algumas linguagens para o back-end como Node.js, Java e Python.</p>
        </div>
        <div>
          <IoMdBook size={30} />
          <h2>Minha Educação</h2>
          <p>Quando começei a programar era mais como um hobby, então fiz muitos cursos pela internet, sem pretensões de cursar uma faculdade. Esses cursos me deram uma base muito sólida de lógica, estrutura e raciocínio, o que atualmente me ajuda muito na faculdade que faço. </p>
        </div>
        <div>
          <BsTools size={30} />
          <h2>Habilidades</h2>
          <p>Possuo conhecimento nas principais tecnologias do mercado, começando pelo Front-end utilizo React.js, HTML, CSS,
          Bootstrap, Figma e Canva. Já no Back-end utilizo Express.js, Spring Boot, REST APIs e Django. No Banco de dados, MySQL, MongoDB,
          PostgreSQL.</p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
