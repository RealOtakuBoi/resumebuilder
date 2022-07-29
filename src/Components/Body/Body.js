import React from 'react'
import styles from './Body.module.css'
import { ArrowDown } from 'react-feather'
import { Editor } from '../../Editor/Editor'

export const Body = () => {

    const colors = ['#239ce2', '#48bb78', '#0bc5ea', '#a0a3c0', '#ed8936'];
    const sections = {
        basicInfo : 'Basic Info',
        workExp : 'Work Experience',
        projects : 'Projects',
        education : 'Education',
        achievments : 'Achievments',
        summary : 'Summary',
        other : 'Other'
    }
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Build Resume</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                    colors.map((item => (
                        <span key={item} style={{background: item}} className={styles.color}></span>
                    )))
                }
                <span className={styles.color}></span>
                <span className={styles.color}></span>
                <span className={styles.color}></span>
                <span className={styles.color}></span>
                <span className={styles.color}></span>
            </div>
            <button><ArrowDown/>Download</button>
        </div>
        <div className={styles.main}>
            <Editor sections = {sections}/>
        </div>
    </div>
  )
}
