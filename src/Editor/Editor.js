import React, { useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../Components/InputControl/InputControl";

export const Editor = ({ sections }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend Developer"
          
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. Amazon"
          
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
         
        />
        <InputControl
          label="Location"
          placeholder="Enter Location eg. Remote"
          
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          
        />
        <InputControl
          label="End Date"
          type="date"
          
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          
        />
        <InputControl
          placeholder="Line 2"
          
        />
        <InputControl
          placeholder="Line 3"
          
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
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
        />
        <InputControl
          placeholder="Line 2"
        />
        <InputControl
          placeholder="Line 3"
        />
        <InputControl
          placeholder="Line 4"
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your College/School"
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of the education"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of the education"
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
        />
        <InputControl
          label="Title"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your Linkedin Profile link"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github Profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your Email"
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your Phone Number"
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
        />
        <InputControl
          placeholder="Line 2"
        />
        <InputControl
          placeholder="Line 3"
        />
        <InputControl
          placeholder="Line 4"
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        placeholder="Enter some Text"
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
            <InputControl label = 'Title' placeholder='Enter Text'/>
            {generateBody()}
      </div>
    </div>
  );
};
