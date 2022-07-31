import React, { useEffect, useRef, useState } from "react";

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
  const [target, seTarget] = useState("");
  const [source, setSource] = useState("");

  const containerRef = useRef()

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

  const sectioDiv = {
    [sections.workExp]:
    <div
     key={"workExp"} className={`${Styles.section} ${
        info.workExp?.sectionTitle ? "" : Styles.hidden
      }`}
      draggable
      onDragOver={() => seTarget(info.workExp?.id)}
      onDragEnd={() => setSource(info.workExp?.id)}
      >
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
  </div>,

    [sections.projects]:
    <div key={"projects"} className={`${Styles.section} ${
        info.projects?.sectionTitle ? "" : Styles.hidden
      }`}
      draggable
      onDragOver={() => seTarget(info.projects?.id)}
      onDragEnd={() => setSource(info.projects?.id)}
      >
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
  </div>,

    [sections.education]:
    <div key={"education"} className={`${Styles.section} ${
        info.education?.sectionTitle ? "" : Styles.hidden
      }`}
      draggable
      onDragOver={() => seTarget(info.education?.id)}
      onDragEnd={() => setSource(info.education?.id)}>
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
    </div>,

    [sections.achievments]:
    <div
        key={"achievement"}
        className={`${Styles.section} ${Styles.achievments}`}
        draggable
        onDragOver={() => seTarget(info.achievments?.id)}
        onDragEnd={() => setSource(info.achievments?.id)}
        >
         <div className={Styles.sectionTitle}>
          {/* {info.achievments?.sectionTitle} */}
          Achievements
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
      </div>,

    [sections.summary]:
    <div key={"summary"} className={`${Styles.section} ${
        info.summary?.sectionTitle ? "" : Styles.hidden
      }`}
      draggable
      onDragOver={() => seTarget(info.summary?.id)}
      onDragEnd={() => setSource(info.summary?.id)}>
      <div className={Styles.sectionTitle}>{info.summary?.sectionTitle}</div>
      <div className={Styles.content}>
        <p className={Styles.overview}>{info.summary?.summary}</p>
      </div>
    </div>,

    [sections.other]:
    <div key={"other"} className={`${Styles.section} ${
        info.other?.sectionTitle ? "" : Styles.hidden
      }`}
      draggable
      onDragOver={() => seTarget(info.other?.id)}
      onDragEnd={() => setSource(info.other?.id)}>
      <div className={Styles.sectionTitle}>{info.other?.sectionTitle}</div>
      <div className={Styles.content}>
        <p className={Styles.overview}>{info.other?.detail}</p>
      </div>
    </div>


  }

  const swapSourceTarget = (source, target) => {
    if(!source || !target) return;
    const tempColumns = [[...column[0]], [...column[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumn(tempColumns);
  }

  useEffect(() => {
    setColumn([
      [sections.projects, sections.education, sections.summary],

      [sections.workExp,sections.achievments ,sections.other ],
    ]);
  }, []);


  useEffect(() => {
    swapSourceTarget(source, target)
  },[source])


  useEffect(() => {

  },[information])

  useEffect(()=> {
    const container = containerRef.current;
    if(!props.activeColor || !container) return;
    container.style.setProperty('--color',props.activeColor)
  },[props.activeColor])

  return (
    <div ref={containerRef} className={Styles.container}>
      <div className={Styles.header}>
        <p className={Styles.heading}>{info.basicInfo?.detail?.name}</p>
        <p className={Styles.subHeading}>{info.basicInfo?.detail?.title}</p>

        <div className={Styles.links}>

            {
                info.basicInfo?.detail?.email && 
          <a className={Styles.link} type='email'>
            <AtSign />
            {info.basicInfo?.detail?.email}
          </a>
            }

            {
                info.basicInfo?.detail?.linkedin &&
          <a className={Styles.link} href={info.basicInfo?.detail?.linkedin}>
            <Linkedin />
            {info.basicInfo?.detail?.linkedin}
          </a>
            }

            {
                info.basicInfo?.detail?.github && 
          <a className={Styles.link} href={info.basicInfo?.detail?.github}>
            <GitHub />
            {info.basicInfo?.detail?.github}
          </a>
            }

          {
            info.basicInfo?.detail?.phone &&
          <a className={Styles.link}>
            <Phone />
            {info.basicInfo?.detail?.phone}
          </a>
          }

        </div>
      </div>
      <div className={Styles.main}>
        <div className={Styles.col1}>{
            column[0].map((item)=>sectioDiv[item])
        }</div>
        <div className={Styles.col2}>{
            column[1].map((item)=>sectioDiv[item])
        }</div>
      </div>
    </div>
  );
}

export default Resume;
