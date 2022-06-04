//import { parseCookies } from '@/helpers/index'
import { FaImage } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Add.module.css'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'

export default function EditDeveloperPage({ dev }) {
  const [values, setValues] = useState({
      name: '',
      description: '',
      experience: '',
      position: '',
      graduated: '',
      skills: '',
      location: '',
  })

  const [imagePreview, setImagePreview] = useState(
    dev.image ? dev.image.formats.thumbnail.url : null
  )
  const [showModal, setShowModal] = useState(false)

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

  const imageUploaded = async (e) => {
//      console.log('uploaded'); or /api/developers?populate=*
    const res = await fetch(`${API_URL}/api/developers?populate=*&${dev.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (  
    <Layout title='Add developer details'>
        <Link href='/developers'>
            <a className={styles.back}>
              {'<'} Go Back
            </a>
        </Link>
        <h1>Edit Developer Profile</h1>
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
                value='Update Profile'
                className='btn-primary'
            />
        </form>

        <h2>Profile Image</h2>
        {imagePreview ? (
            <Image src={imagePreview} height={100} width={170} />
        ) : (
            <div>
            <p>No image uploaded</p>
            </div>
        )}

        <div>
            <button
            onClick={() => setShowModal(true)}
            className='btn-secondary btn-icon'
            >
            <FaImage /> Set Image
            </button>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
            <ImageUpload
             devId={dev.id}
             imageUploaded={imageUploaded}
  //           token={token}
            />
        </Modal>

    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
//    const { token } = parseCookies(req)
  
    const res = await fetch(`${API_URL}/api/developers?populate=*/${id}`)
    const dev = await res.json()
  
    return {
      props: {
        dev,
        token,
      },
    }
}
