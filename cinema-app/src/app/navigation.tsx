import logo from '../app/images/logo.png'
import Image from 'next/image'

export default function Navigation() {
    return (<><Image
    src={logo}
    alt="LOGO">
    </Image>
    </>)
  }