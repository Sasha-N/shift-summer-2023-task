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
        </div>
      </div>
    </main>
  )
}
