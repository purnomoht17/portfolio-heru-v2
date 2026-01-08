import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>                  
          <div className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Heru Portfolio. All rights reserved.
          </div>      
        </div>
      </div>
    </footer>
  );
}

export default Footer;