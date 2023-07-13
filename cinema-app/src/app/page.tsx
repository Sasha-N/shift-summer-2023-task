'use client'
import styles from './page.module.css'
import Image from 'next/image'
import witcher from './images/witcher.jpg'
import { useRouter } from 'next/navigation'

const mainImageStyle = {
  borderRadius: '8px',
}

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.back_image}>
          <Image
            src={witcher}
            style={mainImageStyle}
            width={1100}
            alt="image"/>
          </div>
        <div className={styles.about_block}>
          <span className={styles.date}>АПРЕЛЬ, 2023</span>
          <br />
          <span className={styles.subtitle}>Окунись в мир кино</span>
          <br />
          <p className={styles.subscription}>В нашем кинотеатре вы проведёте незабываемые вечера со своими любимыми героями. На сайте представлен широкий выбор фильмов разных жанров. Заказ и бронирование билетов онлайн.</p>
          <div className={styles.btn_group}>
          <button className={styles.landing_btn_buy} onClick={() => router.push('/pages/affiche')}>Купить билет</button>
          <button className={styles.landing_btn_watch}>Смотреть ролик</button>
          </div>
        </div>
      </div>
    </main>
  )
}
