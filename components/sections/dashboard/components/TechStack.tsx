import React from 'react';
import styles from './TechStack.module.css';
import { FaServer, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiDocker } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionLabel}>Core Technologies</h3>
      <div className={styles.techGrid}>
        
        <div className={styles.techItem}>
          <SiTypescript size={20} color="#3178C6" />
          <span className={styles.techText}>TypeScript</span>
        </div>
        
        <div className={styles.techItem}>
          <SiNextdotjs size={20} color="#fff" />
          <span className={styles.techText}>Next.js</span>
        </div>

        <div className={styles.techItem}>
          <FaServer size={20} color="#818cf8" />
          <span className={styles.techText}>Node.js</span>
        </div>

        <div className={styles.techItem}>
          <SiPostgresql size={20} color="#336791" />
          <span className={styles.techText}>PostgreSQL</span>
        </div>

        <div className={styles.techItem}>
          <SiDocker size={20} color="#2496ED" />
          <span className={styles.techText}>Docker</span>
        </div>

        <div className={styles.techItem}>
          <FaCloud size={20} color="#38bdf8" />
          <span className={styles.techText}>REST API</span>
        </div>

      </div>
    </div>
  );
};

export default TechStack;