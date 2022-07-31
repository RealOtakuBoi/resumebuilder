import React, { useEffect, useState } from "react";

import Styles from "./Resume.module.css";

import { Calendar, GitHub, MapPin } from "react-feather";
import { Linkedin } from "react-feather";
import { AtSign } from "react-feather";
import { Phone } from "react-feather";
import { Paperclip } from "react-feather";

function Resume(props) {
    const information = props.information;
    const sections = props.sections;
  const [column, setColumn] = useState([[], []]);

  const info = {
    workExp: information[sections.workExp],
    projects: information[sections.projects],
    achievments: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) =>{
    if(!value) return ''
    const date = new Date(value)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const workExpSection = (
    <div key={"workExp"} className={`${Styles.section} ${Styles.workExp}`}>
      <div className={Styles.sectionTitle}>{info.workExp?.sectionTitle}</div>
      <div className={Styles.content}>
        {
            info.workExp?.details?.map((item) => (
                <div className={Styles.item} key={item.title}>
                {
                    item.title &&
                <p className={Styles.title}>{item.title}</p>
                }

                {
                    item.companyName &&
            <p className={Styles.subTitle}>{item.companyName}</p>
                }

                {
                    item.certificationLink && 
            <a className={Styles.link} href ={item.certificationLink}>
                <Paperclip/>
                {item.certificationLink}
            </a>
                }

                {
                item.startDate && item.endDate ? (
                    <div className={Styles.date}>
                      <Calendar /> {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </div>   ) : (
                        ''
                    )}
                

                {
                    item.location && 
            <p className={Styles.location}>
                <MapPin/>
                {item.location}
                </p>
                }

                {
                    item.points?.length > 0 && 
                    <ul className={Styles.points}>
                        {
                            item.points?.map((elem, index) => (
                                <li className={Styles.point} key={elem+index}>
                                    {elem}
                                    </li>
                            ))
                        }
                    </ul>
                }
                    
                

        </div>
            ))
        }
        
      </div>
    </div>
  );

  const projectsSection = (
    <div key={"projects"} className={`${Styles.section} ${Styles.projects}`}>
      <div className={Styles.sectionTitle}>{info.projects?.sectionTitle}</div>
      <div className={Styles.content}>
        {
            info.projects?.details?.map((item) => (
                <div className={Styles.item}>
                    {
                        item.title &&
            <p className={Styles.title}>{item.title}</p>
                    }

                    {
                        item.link && 
            <a className={Styles.link} href={item.link}>
                <Paperclip/>
                {item.link}
            </a>
                    }

                    {
                        item.github && 
            <a className={Styles.link} href ={item.github}>
                <GitHub/>
                {item.github}
            </a>
                    }

                    {
                        item.overview &&
            <p className={Styles.overview}>{item.overview}</p>
                    }



{
                    item.points?.length > 0 && 
                    <ul className={Styles.points}>
                        {
                            item.points?.map((elem, index) => (
                                <li className={Styles.point} key={elem+index}>
                                    {elem}
                                    </li>
                            ))
                        }
                    </ul>
                }
        </div>
            ))
        }
        
      </div>
    </div>
  );

  const educationSection = (
    <div key={"education"} className={`${Styles.section} ${Styles.education}`}>
      <div className={Styles.sectionTitle}>{info.education?.sectionTitle}</div>
      <div className={Styles.content}>
        {
            info.education?.details?.map((item) => (
                <div className={Styles.item}>
                    {
                        item.title &&
            <p className={Styles.title}>{item.title}</p>
                    }

                    {
                        item.college &&
            <p className={Styles.subTitle}>{item.college}</p>
                    }

                    {

                    }


                    {
                item.startDate && item.endDate ? (
                    <div className={Styles.date}>
                      <Calendar /> {getFormattedDate(item.startDate)}-
                      {getFormattedDate(item.endDate)}
                    </div>   ) : (
                        ''
                    )}
            </div>
            ))
        }
        
    </div>
    </div>
  );

  const achievmentsSection = (
    <div
        key={"achievement"}
        className={`${Styles.section} ${Styles.achievments}`}
      >
         <div className={Styles.sectionTitle}>
          Achievments
        </div>
        <div className={Styles.content}>
        {
                    info.achievments?.points?.length > 0 && 
                    <ul className={Styles.numbered}>
                        {
                            info.achievments?.points?.map((elem, index) => (
                                <li className={Styles.points} key={elem+index}>
                                    {elem}
                                    </li>
                            ))
                        }
                    </ul>
                }
        </div>
      </div>
  )

  const otherSection = (
    <div key={"other"} className={`${Styles.section} ${Styles.other}`}>
      <div className={Styles.sectionTitle}>{info.other?.sectionTitle}</div>
      <div className={Styles.content}>
        <p className={Styles.overview}>{info.other?.detail}</p>
      </div>
    </div>
  );

  const summarySection = (
    <div key={"summary"} className={`${Styles.section} ${Styles.summary}`}>
      <div className={Styles.sectionTitle}>{info.summary?.sectionTitle}</div>
      <div className={Styles.content}>
        <p className={Styles.overview}>{info.summary?.summary}</p>
      </div>
    </div>
  );

  useEffect(() => {
    setColumn([
      [projectsSection, educationSection, summarySection],

      [workExpSection, achievmentsSection, otherSection],
    ]);
  }, []);


  useEffect(() => {

  },[information])

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <p className={Styles.heading}>Name</p>
        <p className={Styles.subHeading}>Blockchain Developer</p>

        <div className={Styles.links}>
          <a className={Styles.link}>
            <AtSign />
            abc@gmail.com
          </a>
          <a className={Styles.link}>
            <Linkedin />
            linkedin.com
          </a>
          <a className={Styles.link}>
            <GitHub />
            github.com
          </a>

          <a className={Styles.link}>
            <Phone />
            1234567890
          </a>
        </div>
      </div>
      <div className={Styles.main}>
        <div className={Styles.col1}>{column[0]}</div>
        <div className={Styles.col2}>{column[1]}</div>
      </div>
    </div>
  );
}

export default Resume;
