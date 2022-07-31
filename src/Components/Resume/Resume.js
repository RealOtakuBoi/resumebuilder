

import React, { useEffect, useState } from 'react'

import Styles from './Resume.module.css'

import { GitHub } from 'react-feather'
import { Linkedin } from 'react-feather'
import { AtSign } from 'react-feather'
import { Phone } from 'react-feather'

function Resume(props) {

    const [column, setColumn] = useState([[],[]]);

    const workExpSection = (<div key={'workExp'} className={`${Styles.section} ${Styles.workExp}`}>
        <div className={Styles.sectionTitle}>Work Experience</div>
    </div>)

const projectsSection = (<div key={'projects'} className={`${Styles.section} ${Styles.projects}`}>
<div className={Styles.sectionTitle}>Projects</div>
</div>)

const educationSection = (<div  key={'education'} className={`${Styles.section} ${Styles.education}`}>
        <div className={Styles.sectionTitle}>Education</div>
    </div>)

const achievmentsSection = (<div key={'achievments'} className={`${Styles.section} ${Styles.achievments}`}>
<div className={Styles.sectionTitle}>Achievments</div>
</div>)

const otherSection = (<div key={'other'} className={`${Styles.section} ${Styles.other}`}>
<div className={Styles.sectionTitle}>Other</div>
</div>)

const summarySection = (<div  key={'summary'} className={`${Styles.section} ${Styles.summary}`}>
<div className={Styles.sectionTitle}>Summary</div>
</div>)


    useEffect(() => {
        setColumn([
            [
                projectsSection, educationSection, summarySection
            ],

            [
                workExpSection, achievmentsSection, otherSection
            ]
        ])
    },[])

    
  return (

    <div className={Styles.container}>
        <div className={Styles.header}>
            <p className={Styles.heading}>Name</p>
            <p className={Styles.subHeading}>Blockchain Developer</p>

            <div className={Styles.links}>
                <a className={Styles.link}>
                    <AtSign/>
                    abc@gmail.com</a>
                <a className={Styles.link}>
                    <Linkedin/>
                    linkedin.com</a>
                <a className={Styles.link}>
                    <GitHub/>
                    github.com</a>

                <a className={Styles.link}>
                    <Phone/>
                    1234567890</a>

            </div>
        </div>
        <div className={Styles.main}>
            <div className={Styles.col1}>
                {column[0]}
            </div>
            <div className={Styles.col2}>
                {column[1]}
            </div>
        </div>
    </div>
  )
}

export default Resume