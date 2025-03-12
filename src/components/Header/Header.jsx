import styles from './Header.module.scss'

// Icons
import { MdOutlineClose } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { useState } from 'react';


const Header = () => {
  const [showNavbar, setShowNavbar] = useState("")

  function showNav() {
    setShowNavbar(styles.show)
  }

  function closeNav() {
    setShowNavbar("")
  }
  return (
    <header className={styles.header}>
      <h1>Pedro</h1>

      <BsList className={styles.btnList} onClick={showNav} size={45} />

      <nav className={showNavbar}>
        <div onClick={closeNav}><a href="#top">Início</a></div>
        <div onClick={closeNav}><a href="#about">Sobre</a></div>
        <div onClick={closeNav}><a href="#projects">Projetos</a></div>
        <div onClick={closeNav}><a className={styles.contact} href="#contact">Contatos</a></div>
        <div className={styles.btnCloseNav}>
          <MdOutlineClose onClick={closeNav} size={45} />
        </div>
      </nav>
    </header>
  )
}

export default Header
