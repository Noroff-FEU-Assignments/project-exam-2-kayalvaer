//test
import Layout from '@/components/Layout'
import Link from 'next/link'
import DeveloperDetail from '@/components/DeveloperDetail'
import { API_URL } from '../config/index'
import styles from '@/styles/home.module.css'

export default function HomePage({ developers }) {

  return (
    <Layout>
      <h1>Featured developers</h1>

      {developers.length === 0 && <h3>No available developers</h3>}

      <div className={styles.gridList}>
          {developers.map((dev) => (
            <DeveloperDetail key={dev.id} dev={dev}/> 
          ))}
      </div>

      {developers.length > 0 && (
            <Link href='/developers'>
              <a className="btn-secondary">View All Developers</a>
            </Link>
      )}
    </Layout>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/developers?populate=*`);
  
 
//   const developers = await res.json();

//   return {
//     // props: {developers: developers.data }, 
//     props: { developers },
//     revalidate: 1 
//   };
// }

//option 2
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/developers?populate=*`);
  
 
  const developers = await res.json();
  console.log({developers})

  return {
    props: { developers }, 
//    props: {developers: developers.data },
    revalidate: 1,
  };
}