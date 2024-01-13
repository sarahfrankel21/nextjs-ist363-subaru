import React from 'react';
import Container from './Container';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        {}
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;