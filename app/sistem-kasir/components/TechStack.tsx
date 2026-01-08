import React from 'react';
import styles from './TechStack.module.css';

const TechStack = () => {
  const technologies = [
    "Node.js", "Next.js", "MySql", "RESTful API ", 
    "Midtrans", "Prisma"
  ];

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Dibangun Menggunakan Teknologi Modern</h3>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;