import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/Layout.module.css'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({title, keywords, description, children}) {
  const router = useRouter()

  return (
    <div>
     <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      
      {router.pathname === '/' && <Hero />}

      <div className={styles.wrapper}>
        { children }
      </div>

      <Footer />

    </div>
  )
}

Layout.defaultProps = {
    title: 'Kutek | Find dedicated student developers',
    description: 'Find developers internsips for students',
    keywords: 'developers, ux designers, frontend, fullstack, software development, internships, student jobs',
}