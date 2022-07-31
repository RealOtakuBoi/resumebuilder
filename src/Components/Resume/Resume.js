

import React from 'react'

import Styles from './Resume.module.css'

import { GitHub } from 'react-feather'
import { Linkedin } from 'react-feather'
import { AtSign } from 'react-feather'
import { Phone } from 'react-feather'

function Resume(props) {

    const workExpSection = (<div className={`${Styles.section} ${Styles.workExp}`}>
        <div className={Styles.sectionTitle}>Work Experience</div>
    </div>)

const projectsSection = (<div className={`${Styles.section} ${Styles.projects}`}>
<div className={Styles.sectionTitle}>Projects</div>
</div>)

const educationSection = (<div className={`${Styles.section} ${Styles.education}`}>
        <div className={Styles.sectionTitle}>Education</div>
    </div>)

const achievmentsSection = (<div className={`${Styles.section} ${Styles.achievments}`}>
<div className={Styles.sectionTitle}>Achievments</div>
</div>)

const otherSection = (<div className={`${Styles.section} ${Styles.other}`}>
<div className={Styles.sectionTitle}>Other</div>
</div>)

const summarySection = (<div className={`${Styles.section} ${Styles.summary}`}>
<div className={Styles.sectionTitle}>Summary</div>
</div>)

    
  return (

    <div className={Styles.container}>
        <div className={Styles.header}>
            <p className={Styles.heading}>Name</p>
            <p className={Styles.subHeading}>Blockchain Developer</p>

            <div className={Styles.links}>
                <div className={Styles.link}>
                    <AtSign/>
                    abc@gmail.com</div>
                <div className={Styles.link}>
                    <Linkedin/>
                    linkedin.com</div>
                <div className={Styles.link}>
                    <GitHub/>
                    github.com</div>

                <div className={Styles.link}>
                    <Phone/>
                    1234567890</div>

            </div>
        </div>
    </div>
  )
}

export default Resume