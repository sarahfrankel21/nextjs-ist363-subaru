import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Button from './Button';
import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Logo from './Logo';
import Row from 'row';
import styles from './header.module.scss';
import Container from './Container';
import Nav from './Nav'; 

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
    return (
      <header className={styles.header}>
        <Container>
          <Row justifyContent="space-between">
            <Logo />
            <Nav.Desktop />
            <ButtonUI
  icon="menu"
  clickHandler={() => {
    setIsMobileNavOpen(true);
  }}
/>
{isMobileNavOpen && <Nav.Mobile closeHandler={() => setIsMobileNavOpen(false)} />}

          </Row>
        </Container>
      </header>
    );
<AnimatePresence>
  {isMobileNavOpen && (
    <Nav.Mobile closeHandler={() => setIsMobileNavOpen(false)} />
  )}
</AnimatePresence>

  
  
  export default Header;

  }; 