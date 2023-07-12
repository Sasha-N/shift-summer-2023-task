import styles from './page.module.css'

export default function Affiche() {
    return <>
    <h3 className={styles.title}>АФИША</h3>
    <h4 className={styles.subtitle}><a className={styles.link}>сегодня</a> в прокате</h4>
    </>
  }