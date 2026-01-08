// components/sections/project/page.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import styles from './project.module.css';
import ProjectCard from './components/ProjectCard';
import { projectsData } from '@/public/data/projectData';

const ProjectSection = () => {
  return (
    <main className={styles.wrapper} id="projects">
      <div className={styles.ambientLight}></div>

      <div className={styles.container}>
        
        <div className={`${styles.header} ${styles.animateFadeIn}`}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Portofolio proyek backend, API, dan aplikasi web yang telah saya kerjakan.
          </p>
        </div>

        {/* Project List */}
        <div className={styles.projectGrid}>
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}              
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default ProjectSection;