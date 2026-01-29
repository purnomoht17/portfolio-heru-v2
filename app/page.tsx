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
    <main className="bg-[#0f172a] min-h-screen relative w-full max-w-[100vw] overflow-x-hidden">
      
      {/* 1. Dashboard - class reveal-on-scroll dihapus */}
      <section id="dashboard" className="w-full">
        <DashboardSection />
      </section>

      {/* 2. Resume - class reveal-on-scroll dihapus */}
      <section id="resume" className="w-full">
        <ResumeSection />
      </section>

      {/* 3. Projects - class reveal-on-scroll dihapus */}
      <section id="projects" className="w-full">
        <ProjectSection />
      </section>

      {/* 4. Contact - class reveal-on-scroll dihapus */}
      <section id="contact" className="w-full">
        <ContactSection />
      </section>

      {/* Footer - class reveal-on-scroll dihapus */}
      <div className="w-full">
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