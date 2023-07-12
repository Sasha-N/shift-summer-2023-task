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
        <Image
          src={witcher}
          style={mainImageStyle}
          width={1100}
          alt="image"></Image>
      </div>
    </main>
  )
}
