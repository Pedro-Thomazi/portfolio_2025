import { Link } from 'react-router-dom'
import styles from './Contato.module.scss'

// Icons
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Contato = () => {
  const [show, setShow] = useState('')

  function copyEmail() {
    const myEmail = 'pedro.thomazi@hotmail.com'
    navigator.clipboard.writeText(myEmail)

    setShow(styles.showMessage)

    setTimeout(() => {
      closeMessage()
    }, 5000);
  }
  
  function closeMessage() {
    setShow()
  }

  return (
    <footer id='contact' className={styles.containerContato}>
      <p className={styles.title}>Entre em contato comigo</p>
      <h1>Contatos</h1>
      <div className={styles.contatos}>
        <p onClick={copyEmail}><span>E-mail: </span>pedro.thomazi@hotmail.com</p>
        <Link to={"https://www.linkedin.com/in/pedro-thomazi-viannini/"} target='_blank'>
          <span>Linkedin: </span> Pedro Thomazi Viannini
        </Link>
      </div>

      <span className={`${styles.message} ${show}`}><p>E-mail Copiado</p><MdOutlineClose onClick={closeMessage} size={25} /></span>
    </footer>
  )
}

export default Contato
