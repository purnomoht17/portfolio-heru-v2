import React from 'react';
import styles from '../resume.module.css';
import { FaTools, FaCode } from 'react-icons/fa';

interface SkillItem {
  id: number | string;
  name: string;
}

interface SkillsProps {
  professional: SkillItem[];
  technical: SkillItem[];
}

const Skills = ({ professional, technical }: SkillsProps) => {
  return (
    <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay4}`}>
      <h2 className={styles.sectionTitle}>Skills</h2>

      <div className={styles.skillContainer}>
        {/* Professional Skills */}
        <div className={styles.skillCategory}>
          <div className={styles.categoryTitle}>
            <FaTools className={styles.iconAccent} /> 
            <span>Professional Skills</span>
          </div>
          <div className={styles.skillGrid}>
            {professional.map((skill) => (
              <div key={skill.id} className={styles.skillBadge}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills (Languages) */}
        <div className={styles.skillCategory}>
          <div className={styles.categoryTitle}>
            <FaCode className={styles.iconAccentSecondary} /> 
            <span>Technique Skills</span>
          </div>
          <div className={styles.skillGrid}>
            {technical.map((skill) => (
              <div key={skill.id} className={styles.skillBadge}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;