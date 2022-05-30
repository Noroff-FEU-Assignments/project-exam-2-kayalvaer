import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
     <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className={styles.wrapper}>
        { children }
      </div>

    </div>
  )
}

Layout.defaultProps = {
    title: 'Kutek | Find dedicated student developers',
    description: 'Find developers internsips for students',
    keywords: 'developers, ux designers, frontend, fullstack, software development, internships, student jobs',
}