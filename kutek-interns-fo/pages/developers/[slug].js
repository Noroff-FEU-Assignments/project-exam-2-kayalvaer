import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaFrown, FaTrashAlt } from "react-icons/fa";
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { API_URL } from "@/config/index";
import styles from "@/styles/developerSlug.module.css";
import { useRouter } from 'next/router'

export default function DeveloperDetailPage({ dev }) {
  //  console.log(item);
  const router = useRouter()

  const deleteProfile = async (e) => {
    //console.log("want to delete profile");
    if(confirm('Do you really want to delete profile?')) {
      const res = await fetch(`${API_URL}/api/developers/$
      {dev.id}`, {
        method: 'DELETE'
      })

      const data = await res.json()

      if(!res.ok) {
        toast.error(data.message)
      }else {
        router.push('/developers')
      }
    }
  };

  return (
    <Layout>
      <div className={styles.detail_item}>
        

        <div className={styles.detail_controls}>
          <Link href={`/developers/edit/${dev.id}`}>
            <a>
              <FaFrown /> Edit Profile
            </a>
          </Link>
          <a href="#" className={styles.detail_delete} onClick={deleteProfile}>
            <FaTrashAlt /> Delete Profile
          </a>
        </div>

        <h3>{dev.attributes.name}</h3>

        <ToastContainer />

        {dev.attributes.image && (
          <div className={styles.image}>
            <Image  
            src={
                dev.attributes.image
                ? dev.attributes.image.data.attributes.url
                   : '/imgs/default.jpg'
            }
            width={960}
            height={550}
            />
          </div>
        )}

        <div className={styles.detail_content}>
          <span>
            <FaMapMarkerAlt />
            {dev.attributes.location}
          </span>
          

          <div className={styles.position}>
            <h4>Job Position: </h4>
            <h1>{dev.attributes.position}</h1>
          </div>

          <div className={styles.description}>
            <h3>About: </h3>
            <p>{dev.attributes.description}</p>
          </div>

          <div className={styles.skills}>
            <h3>Skills: </h3>
            <p>{dev.attributes.skills}</p>
          </div>


          <div className={styles.location}>
            <h3>Located: </h3>
            <p>{dev.attributes.address}</p>
          </div>

        </div>

        <div>
          <Link href="/developers">
            <a className={styles.back}>{"< <"} Back To Developer List</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/developers`)
//   const { developers } = await res.json()

//   const paths = developers.map(dev => ({
//     params: { slug: dev.slug }
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//     const res = await fetch(`${API_URL}/api/developers?slug=${slug}`);
//     const developers = await res.json();
//  //   console.log(developers);
//     return {
//         props: {
//          dev: developers[0]
//         },
//         revalidate: 1,
//         }
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/developers?slug=${slug}&populate=*`);
  const developers = await res.json();
  
  return {
    props: {
      dev: developers.data[0]
    },
  };
}