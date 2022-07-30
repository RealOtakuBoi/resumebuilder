import React from 'react'
import { useState } from 'react'
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

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.projects]: {
          id: sections.projects,
          sectionTitle: sections.projects,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievments]: {
          id: sections.achievments,
          sectionTitle: sections.achievments,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });
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
            <Editor sections = {sections} information = {resumeInformation}/>
        </div>
    </div>
  )
}
