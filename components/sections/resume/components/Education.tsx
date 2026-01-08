import React from 'react';
import styles from '../resume.module.css';

interface EducationItem {
  id: number | string;
  period: string;
  school: string;
  location: string;
  degree: string;
  field: string;
  description: string;
}

interface EducationProps {
  data: EducationItem[];
}

const Education = ({ data }: EducationProps) => {
  return (
    <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay3}`}>
      <h2 className={styles.sectionTitle}>Education</h2>
      
      {data.map((edu) => (
        <div key={edu.id} className={styles.itemRow}>
          <div className={styles.leftCol}>
            <div className={styles.infoBox}>
              <span className={styles.period}>{edu.period}</span>
              <h3 className={styles.role}>{edu.school}</h3>
              <div className={styles.company}>{edu.location}</div>
              <div className={styles.degree}>
                {edu.degree} - {edu.field}
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.description}>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;