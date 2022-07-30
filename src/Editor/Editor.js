import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../Components/InputControl/InputControl";
import { X } from "react-feather";

export const Editor = ({ sections, information }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  )

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || '',
    title: activeInformation?.detail?.title || '',
    linkedin: activeInformation?.detail?.linkedin || '',
    github: activeInformation?.detail?.github || '',
    phone: activeInformation?.detail?.phone || '',
    email: activeInformation?.detail?.email || '',
  })

  const handlePointUpdate = (value, index) => {
    const tempValues = {...values}
    tempValues.points[index]=value
    setValues(tempValues)
  }

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. Frontend Developer"
          defaultValue = {values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
          
        />
        <InputControl
          label="Company Name"
          placeholder="Enter Name of a Company"
          defaultValue = {values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
          
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          defaultValue = {values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificateLink: event.target.value }))
          }
         
        />
        <InputControl
          label="Location"
          placeholder="Enter Location"
          defaultValue = {values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
          
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          defaultValue = {values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
          
        />
        <InputControl
          label="End Date"
          type="date"
          defaultValue = {values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
          
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          defaultValue = {values.points ? values.points[0] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue = {values.points ? values.points[1] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue = {values.points ? values.points[2] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Project Name"
          defaultValue = {values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
          
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        defaultValue = {values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          defaultValue = {values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter Github Repo link of project"
          defaultValue = {values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          defaultValue = {values.points ? values.points[0] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue = {values.points ? values.points[1] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue = {values.points ? values.points[2] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue = {values.points ? values.points[3] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. B-tech"
          defaultValue = {values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
          

          
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your College/School"
        defaultValue = {values.collage}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, collage: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of the education"
          defaultValue = {values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of the education"
          defaultValue = {values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your Full Name"
          defaultValue = {values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          defaultValue = {values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your Linkedin Profile link"
          defaultValue = {values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github Profile link"
          defaultValue = {values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your Email"
          defaultValue = {values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your Phone Number"
          defaultValue = {values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          defaultValue = {values.points ? values.points[0] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue = {values.points ? values.points[1] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue = {values.points ? values.points[2] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue = {values.points ? values.points[3] : ''}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        defaultValue = {values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        placeholder="Enter some Text"
        defaultValue = {values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );


  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.projects:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievments:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
  },[activeSectionKey])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
            <InputControl label = 'Title' placeholder='Enter Text' value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)}/>

            <div className={styles.chips}>
              
                {
                  activeInformation?.details ?
                  activeInformation.details?.map((item, index) => 
                    <div className={styles.chip} key = {item.title+index}>
                    <p>{sections[activeSectionKey]} {index+1}</p>
                    <X/>
                    </div>
                  )
                  : ''}

            </div>
            {generateBody()}

            <button>Save</button>
      </div>
    </div>
  );
};
