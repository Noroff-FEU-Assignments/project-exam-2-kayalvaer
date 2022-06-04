import React from 'react';
import { FaRegHeart } from 'react-icons/fa'
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/developerDetail.module.css'

export default function developerDetail({dev}) {
 //  console.log({item})
    return (
      <div className={styles.Container}>
          <div className={styles.item}>
              <div className={styles.testing}>
                  <Image
                  src={
                        dev.image
                        ? dev.image.data.attributes.url
                           : '/imgs/default.jpg'
                    }
                  width={350}
                  height={250}
                  />
              </div>
 
              <div className={styles.content}>
                  <h3>{dev.name} 
                  <FaMapMarkerAlt />
                   {dev.location}
                   </h3>
                  <h2>{dev.position}</h2>
                  <span>
                       Experience : {dev.experience}
                  </span>
                  <div className={styles.textInfo}>
                      
                  <span>
                    {dev.skills} 
                  </span>
                  <div className={styles.devlink}>
                    <Link href={`/developers/${dev.slug}`}>
                        <a className="btnarrow">&rarr; View More</a>
                    </Link>
                  </div>
               </div>

                <Link href='/developers'>
                    <a className='btn-secondary'>Message me</a>
                </Link>
                <div className={styles.fav}>
                    <Link href={`/developers/edit/${dev.id}`}>
                        <a>
                            <FaRegHeart />
                        </a>
                    </Link>
                </div>


              </div> 
 
              {/* <div className={styles.itemLink}>
                  <Link href={`/developers/${dev.slug}`}>
                  <a className='btn-link arrowRight'>
                      <Image
                          src={
                              '/imgs/right-long-solid.svg'
                          }
                          width={40}
                          height={20}
                      />
                      <span>View more</span>
                  </a>
                  </Link>
                  <div className={styles.detail_controls}>
                      <Link href={`/developers/edit/${dev.id}`}>
                      <a>
                          <FaRegHeart />
                      </a>
                      </Link>
                  </div>
              </div> */}
 
          </div>
      </div>
    )
  }