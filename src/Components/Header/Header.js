import React from 'react'
import styles from './Header.module.css'
import ResumeSvg from '../../Assets/Resume.svg'

export const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.right}>
        <p className={styles.heading}>A <span>Resume</span> That Stands Out!</p>
        <p className={styles.heading}>Make your own Resume <span>Its Free!</span></p>
    </div>

    <div className={styles.left}>
        <img src={ResumeSvg} alt="Presenting" />
    </div>

    </div>
  )
}
