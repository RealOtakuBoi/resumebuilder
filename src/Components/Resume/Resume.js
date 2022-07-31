

import React from 'react'

import Styles from './Resume.module.css'

import { GitHub } from 'react-feather'
import { Linkedin } from 'react-feather'
import { AtSign } from 'react-feather'
import { Phone } from 'react-feather'

function Resume() {
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