/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import styles from './project.module.css';
import ProjectCard from './components/ProjectCard';
import { FaTimes } from 'react-icons/fa';
import { projectsData } from '@/public/data/projectData'; 
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const ProjectSection = () => {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedProject = projectsData.find(p => p.id === selectedId);

  const closeModal = () => setSelectedId(null);

  return (
    <LayoutGroup>
      <main className={styles.wrapper} id="projects">
        <div className={styles.ambientLight}></div>

        <div className={styles.container}>
          <div className={`${styles.header} ${styles.animateFadeIn}`}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Portofolio proyek backend, API, dan aplikasi web yang telah saya kerjakan.
            </p>
          </div>

          {/* Grid Project */}
          <div className={styles.projectGrid}>
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onProjectClick={(id) => setSelectedId(id)}
              />
            ))}
          </div>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Let&apos;s build something together</h2>
            <Link href="#contact" className={styles.ctaBtn}>
              Contact Me
            </Link>
          </section>
        </div>

        {mounted && createPortal(
          <AnimatePresence>
            {selectedId && selectedProject && (
              <motion.div 
                className={styles.modalOverlay} 
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3 }}
              >
                
                {/* Tombol Close */}
                <motion.button 
                  className={styles.closeBtn} 
                  onClick={closeModal}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: 'var(--bg-dark)' }}
                >
                  <FaTimes />
                </motion.button>

                {/* Wrapper Gambar */}
                <div className={styles.modalImageWrapper}>
                  <motion.img 
                    src={`/images/${selectedProject.filename}`}
                    alt={selectedProject.title}
                    className={styles.fullImage}
                    layoutId={`project-image-container-${selectedId}`}                    
                    transition={{
                      layout: { type: "spring", stiffness: 250, damping: 25 }
                    }}
                    
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body 
        )}

      </main>
    </LayoutGroup>
  );
};

export default ProjectSection;