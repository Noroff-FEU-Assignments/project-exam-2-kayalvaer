import Link from 'next/link'
import {FaUndoAlt, FaTrashAlt} from 'react-icons/fa'
import styles from '@/styles/Admin.module.css'
import Layout from '@/components/Layout'

export default function ManageAdminPage({ dev, handleDelete }) {
    return (
        <Layout title='Admin Dashboad'>
            <div className={styles.developer}> 
                <h4>
                    <Link href={`/developers/${dev.slug}`}>
                        <a>{dev.name}</a>
                    </Link>
                </h4>
                <Link href={`/developers/edit/${dev.id}`}>
                    <a className={styles.edit}>
                        <FaUndoAlt /><span className={styles.icon}>Edit Item</span>
                    </a>
                </Link>
                <a href='#' className={styles.delete}
                    onClick={() => handleDelete(dev.id)}>
                    <FaTrashAlt /> <span className={styles.icon}>Delete</span>
                </a>
            </div>
        </Layout>
        
    )
}