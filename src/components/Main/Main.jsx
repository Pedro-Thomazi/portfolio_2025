import Inicio from '../Inicio/Inicio'
import Projetos from '../Projetos/Projetos'
import Sobre from '../Sobre/Sobre'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.containerMain}>
      <Inicio />
      <Sobre />
      <Projetos />
    </main>
  )
}

export default Main
