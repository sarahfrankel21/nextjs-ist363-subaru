import React from 'react';
import styles from './SocialMediaNav.module.scss'; 

const SocialMediaNav = () => {
  return (
    <nav className={styles.socialMediaNav}>
      <a href="https://www.facebook.com/subaruofamerica" className={styles.icon}>
        {}
        <img src="../images/facebook-icon.png" alt="Facebook" />
      </a>
      <a href="https://www.tiktok.com/@subaruofamerica?lang=en" className={styles.icon}>
        {}
        <img src="/tiktok.webp" alt="Tiktok" />
      </a>
      <a href="http://instagram.com/subaru_usa#" className={styles.icon}>
        {}
        <img src="/instagram-icon.png" alt="Instagram" />
      </a>
      {}
    </nav>
  );
};

export default SocialMediaNav;
