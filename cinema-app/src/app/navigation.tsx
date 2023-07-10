import logo from '../app/images/logo.png'
import Image from 'next/image'
import styles from './page.module.css'

export default function Navigation() {
    return (<>
        <div className={styles.nav}><Image
            src={logo}
            width={280}
            height={48}
            alt="LOGO">
        </Image>
            <button className={styles.btn_in}>Войти</button>
        </div>
    </>)
}