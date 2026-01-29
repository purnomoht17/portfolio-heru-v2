import React from 'react';
import styles from './resume.module.css';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { resumeData } from '@/public/data/resumeData'; 

const ResumePage = () => {
  return (
    <main className={styles.wrapper} id="resume">
      {/* Background Effect */}
      <div className={styles.ambientLight}></div>

      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={`${styles.header} ${styles.animateFadeIn} ${styles.delay1}`}>
          <h1 className={styles.title}>Resume</h1>
        </div>

        {/* Content Components dengan Data Dinamis */}
        <Experience data={resumeData.experience} />
        
        <Education data={resumeData.education} />
        
        <Skills 
          professional={resumeData.professionalSkills} 
          technical={resumeData.languages} 
        />

      </div>
    </main>
  );
};

export default ResumePage;