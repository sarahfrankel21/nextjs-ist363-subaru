import styles from './nav.module.scss';
import { getDesktopNavItems } from '../lib/nav';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Desktop />
    </nav>
  );
};

const Desktop = () => {
  const navItems = getDesktopNavItems();
  return (
    <nav className={styles.nav_desktop}>
      <ul className={styles.ul_list}>
        {navItems.map((navItem, index) => {
          const { label, slug } = navItem;
          return (
            <li key={index} className={styles.nav_list_item}>
              <a href={slug}>{label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
