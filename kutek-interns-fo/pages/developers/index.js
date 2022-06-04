import Layout from '@/components/Layout'
import DeveloperDetail from '@/components/DeveloperDetail'
import { API_URL } from '@/config/index'
import styles from '@/styles/home.module.css'

export default function DeveloperListPage({developers}) {
  return (
    <Layout>
      <h1>Developer Profiles</h1>

      {developers.length === 0 && <h3>No available developers</h3>}

      <div className={styles.gridList}>
          {developers.map((dev) => (
            <DeveloperDetail key={dev.id} dev={dev.attributes}/>
          ))}
      </div>

    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/developers?populate=*`);


 
  const developers = await res.json();

  console.log('deve', developers)

  return {
//    props: { developers },
    props: {developers: developers.data },
    revalidate: 1 
  };
}

//option 2
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/developers?populate=*`);
  
 
//   const developers = await res.json();
  // console.log({developers})

//   return {
//     props: { developers: developers.data }, 
//     revalidate: 1,
//   };
// }
