import React from 'react';
import styles from './DigiTech.module.css';

const DigiTech = () => {
  const stacks = ["Next.js", "Node.js", "RESTful API", "Prisma ORM", "MongoDB", "Vercel"];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Powered By Modern Tech Stack</span>
        <div className={styles.techList}>
          {stacks.map((tech, i) => (
            <span key={i} className={styles.techItem}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigiTech;