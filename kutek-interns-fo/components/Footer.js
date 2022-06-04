import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/imgs/logodark.png" alt="Vercel Logo" width={122} height={66} />
            
          </span>
        </a>
        <p>Copyright &copy; <Link href='/'>KuTek 2021</Link></p>
        <p className={styles.footerTag}>Designed by Kay </p>
    </footer>
  )
}
