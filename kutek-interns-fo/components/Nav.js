import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <header className={styles.navigation}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>KuTek@Dev</a>
        </Link>
      </div>
      <nav>
        <ul>
              <li>
                <Link href='/developers'>
                  <a>Developers</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
              

   
              {/* {user ? ( */}
              {/* if user is logged  */}
              <>
                <li>
                  <Link href='/account/admin'>
                    <a>Admin</a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => logout()} className='btn'>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              
              </> 
              {/* ) : ( */}

              {/* if user is logged out */}
              <>
                <li>
                  <Link href='/account/login'>
                    <a className='btn-login btn-icon'>
                      <FaSignInAlt /> Login
                    </a>
                  </Link>
                </li>
              </>
              {/* )} */}
              

              
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
