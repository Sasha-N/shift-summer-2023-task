import styles from './page.module.css'
import Image from 'next/image'
import witcher from './images/witcher.jpg'

const mainImageStyle = {
  borderRadius: '8px',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.back_image}>
          <Image
            src={witcher}
            style={mainImageStyle}
            width={1100}
            objectFit="cover"
            alt="image"/>
          </div>
        <div className={styles.about_block}>
          <span className={styles.date}>АПРЕЛЬ, 2023</span>
          <br />
          <span className={styles.subtitle}>Окунись в мир кино</span>
          <br />
          <span className={styles.subscription}>В нашем кинотеатре вы проведёте незабываемые вечера со своими любимыми героями. На сайте представлен широкий выбор фильмов разных жанров. Заказ и бронирование билетов онлайн.</span>
        </div>
      </div>
    </main>
  )
}
