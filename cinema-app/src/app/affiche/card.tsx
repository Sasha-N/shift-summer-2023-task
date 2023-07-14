import styles from './page.module.css'

interface filmCard { 
    id: string,
    genre: string, 
    release: string, 
    path: string, 
    name: string, 
    original_name: string, 
    imdb: string, 
    kinopoisk: string }

export default function Card(filmCard: filmCard) {
    const style = {
        background: "url(" + filmCard.path + ")" + ", lightgray 50% / cover no-repeat",
        backgroundSize: "100% 100%",
    }
    return <div className={styles.container_card}>
        <div className={styles.label}><p className={styles.genre}>{filmCard.genre}</p><p className={styles.release}>{filmCard.release}</p></div>
        <div className={styles.cover} style={style}></div>
        <div className={styles.description}>
            <p className={styles.name}>{filmCard.name}</p>
            <p className={styles.original_name}>{filmCard.original_name}</p>
            <p className={styles.rating}>IMDB: {filmCard.imdb}</p>
            <p className={styles.rating}>Kinopoisk - {filmCard.kinopoisk}</p>
            <button className={styles.detail}>Подробнее</button>
        </div>
    </div>;
}