import styles from './Projetos.module.scss'

// Images
import myGramImg from "../../assets/Images/imagemMyGram.png"
import mercadoJavai from "../../assets/Images/mercadoJavai.webp"
import projetoFintech from "../../assets/Images/projetoFintech.png"
import { Link } from 'react-router-dom'

const Projetos = () => {
  const projects = [
    {
      name: "MyGram",
      imgSrc: myGramImg,
      description: "Projeto MyGram é uma rede social feita para pessoas se conectarem e dividirem seus momentos uns com os outros. Aqui utilizei Node.js, React.js e MongoDB. Com esse projeto pude aprimorar meus conhecimento em autenticação de usuário, algo que tinha dificuldade.",
      alt: "Foto do projeto MyGram",
      linkCode: "https://github.com/Pedro-Thomazi/my-gram-V2"
    },
    {
      name: "Mercado Javai",
      imgSrc: mercadoJavai,
      description: "O Mercado Javai ainda está em construção, por enquanto apenas o back-end está sendo construido. Aqui utilizei Java (Spring Boot) 'por isso o nome Javai' e MySQL. Esse projetos foi um dos maiores aprendizados que tive, como a criação e autenticação de usuário, criação de token, criptografia de senha e filtro de segurança.",
      alt: "Foto do projeto Mercado Javai",
      linkCode: "https://github.com/Pedro-Thomazi/BACKEND_mercado_com_Java"
    },
    {
      name: "Projeto Fintech",
      imgSrc: projetoFintech,
      description: "O objetivo desse projeto é desenvolver um aplicativo para ajudar pessoas a terem uma educação financeira melhor, dizendo seus gastos, investimentos e objetivos. No momento o projeto está no início, tendo seu design sendo contruído no Figma.",
      alt: "Foto do projeto Fintech",
      linkCode: null
    },
  ]
  return (
    <section id='projects' className={styles.containerProjetos}>
      <p className={styles.title}>Confira meus principais projetos</p>
      <h1>Projetos</h1>
      <div className={styles.projetos}>
        {projects.map((data, index) => (
          <div key={index} className={styles.projeto}>
            <img src={data.imgSrc} alt={data.alt} />
            <p className={styles.nomeProjeto}>{data.name}</p>
            <p className={styles.projectDescription}>{data.description}</p>
            {data.linkCode != null ? (
              <Link to={data.linkCode} target='_blank'>Código GitHub</Link>
            ) : (
              <Link>Em Construção</Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos
