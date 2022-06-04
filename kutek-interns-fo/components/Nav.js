import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import {useContext} from 'react'
import Search from './Search'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Nav.module.css'

export default function Nav() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className={styles.navigation}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>KuTek@Dev</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
             
              <li>
                <Link href='/developers'>
                  <a>Developers</a>
                </Link>
              </li>

              {user ? (

              //if logged in
              <>

              <li>
                <Link href='/likes'>
                  <a>Favourites</a>
                </Link>
              </li>

              <li>
                <Link href='/developers/add'>
                  <a>Add Developer</a>
                </Link>
              </li>
              <li>
                  <Link href='/account/admin'>
                    <a>Admin</a>
                  </Link>
                </li>
              <li>
                  <button onClick={() => logout()} className='btn'>
                    <FaSignOutAlt /> Sign Out
                  </button>
              </li>

              </> 
             ) : (

              //if logged out

             <>

              <li>
                  <Link href='/account/login'>
                    <a className='btn-login btn-icon'>
                      <FaSignInAlt /> Sign In
                    </a>
                  </Link>
              </li>
              

              </>
             )}
              
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
              
              
              {/* <li>
                <Link href='/account/register'>
                  <a>Register</a>
                </Link>
              </li> */}
        </ul>
      </nav>
    </header>
  )
}
