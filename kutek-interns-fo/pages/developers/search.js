import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import DeveloperDetail from '@/components/DeveloperDetail'
import { API_URL } from '@/config/index'
import styles from '@/styles/home.module.css'

export default function SearchPage({ developers }) {
  const router = useRouter()

  return (
    <Layout title='Search Developers'>

      <Link href='/developers'>Go Back</Link>

      <h1>Developer Profiles</h1>

      {developers.length === 0 && <h3>Search results of {router.query.term} </h3>}

      <div className={styles.gridList}>
          {developers.map((dev) => (
            <DeveloperDetail key={dev.id} dev={dev.attributes}/>
          ))}
      </div>

    </Layout>
  )
}

export async function getServerSideProps({query: {term}}) {
    /*const query = qs.stringify({
        _where: {
          _or: [
            { name_contains: term },
            { developers_contains: term },
            { description_contains: term },
            { position_contains: term },
            { skills_contains: term },
          ],
        },
    })*/

    const query = qs.stringify({
        filters: {
          $or: [
            {
              name: {
                $containsi: term,
              },
            },
            {
              position: {
                $containsi: term,
              },
            },
            {
                skills: {
                  $containsi: term,
                },
            },
            {
                experience: {
                  $containsi: term,
                },
            },
          ],         
        },
      }, {
        encodeValuesOnly: true,
      });

    console.log(query)
  const res = await fetch(`${API_URL}/api/developers?populate=*&${query}`); 
  const developers = await res.json();

  return {
//    props: { developers },
    props: {developers: developers.data },

  };
}

