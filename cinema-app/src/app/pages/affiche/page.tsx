import logo from '../../images/logo.png'
import Image from 'next/image'

export default function Affiche() {
    return <><Image
    src={logo}
    alt="LOGO">
    </Image>
    <h1>АФИША</h1>
    </>
  }