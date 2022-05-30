import Link from 'next/link'
import styles from '/styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
        <h1>Find student interns here !</h1>
        <h2>Passion brought us into Code . . .</h2>
    </div>
  )
}