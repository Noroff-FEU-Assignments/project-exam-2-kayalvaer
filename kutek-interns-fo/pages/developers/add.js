//import { parseCookies } from '@/helpers/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Add.module.css'

export default function AddDeveloperPage() {
  const [values, setValues] = useState({
    name: '',
    description: '',
    experience: '',
    position: '',
    graduated: '',
    skills: '',
    location: ''
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
      e.preventDefault()
      
      //Validation
      const isEmpty = Object.values(values).some(
      (element) => element === '')

      if(isEmpty) {
          toast.error('🦄 Please complete details correctly');
      }

      const res = await fetch(`${API_URL}/api/developers?populate=*`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
//              Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values)
      })

      if(!res.ok) {
          if(res.status === 403 || res.status === 401) {
          toast.error('🦄 Token not included!')
          return
          }
          toast.error('🦄 Oops something check your details!')
      } else {
          const dev = await res.json()
          router.push(`/developers/${dev.slug}`)
      }
  }

  const handleInputChange = (e) => {
      const {name, value} = e.target
      setValues({ ...values, [name]: value})
  }

  return (  
    <Layout title='Add developer details'>
        <Link href='/developers'>
            <a className={styles.back}>
              {'<'} Go Back
            </a>
        </Link>
        <h1>Add Developer</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
                <div>
                    <label htmlFor='name' className={styles.label}>Developer Name</label>
                    <input 
                        type='text'
                        id='name'
                        name='name'
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="editor" className={styles.label}>Skills</label>
                    <input 
                        type='text'
                        id='skills'
                        name='skills'
                        value={values.skills}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="location" className={styles.label}>Location</label>
                    <input 
                        type='text'
                        id='location'
                        name='location'
                        value={values.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="date" className={styles.label}>Graduated</label>
                    <input 
                        type='date'
                        id='date'
                        name='date'
                        value={values.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="time" className={styles.label}>Experience</label>
                    <input 
                        type='number'
                        id='experience'
                        name='expeience'
                        value={values.experience}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="description" className={styles.label}>Description</label>
                <textarea 
                    type='text'
                    id='description'
                    name='description'
                    value={values.description}
                    onChange={handleInputChange}
                >
                </textarea>
            </div>
            <input 
                type='submit' 
                value='Submit Profile'
                className='btn-primary'
            />
        </form>
    </Layout>
)
}

// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req)

//   return {
//     props: {
//       token,
//     },
//   }
// }



