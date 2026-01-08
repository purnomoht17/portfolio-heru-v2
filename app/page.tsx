'use client';

import { useEffect, useState } from 'react';
import Footer from "@/components/layout/Footer";
import DashboardSection from "@/components/sections/dashboard/page";
import ResumeSection from "@/components/sections/resume/page";
import ProjectSection from "@/components/sections/project/page";
import ContactSection from "@/components/sections/contacts/page"; 
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="bg-[#0f172a] min-h-screen relative">
      
      {/* 1. Dashboard */}
      <section id="dashboard" className="reveal-on-scroll">
        <DashboardSection />
      </section>

      {/* 2. Resume */}
      <section id="resume" className="reveal-on-scroll">
        <ResumeSection />
      </section>

      {/* 3. Projects */}
      <section id="projects" className="reveal-on-scroll">
        <ProjectSection />
      </section>

      {/* 4. Contact */}
      <section id="contact" className="reveal-on-scroll">
        <ContactSection />
      </section>

      {/* Footer */}
      <div className="reveal-on-scroll">
        <Footer />
      </div>

      {/* Tombol Back To Top */}
      <button
        className={`back-to-top ${showTopBtn ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
      
    </main>
  );
}
