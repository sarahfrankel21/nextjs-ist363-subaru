import styles from './nav.module.scss';
import {getDesktopNavItems, geMobileNavItems} from '../lib/nav'; 
import ButtonUI from './ButtonUI';
import Link from 'next/link';
const Nav =()=>{
return <nav className={styles.nav}> Nav </nav>
}
const Desktop =()=>{
    const NavItems= getDesktopNavItems();

    return <nav className={styles.nav_Desktop}> Nav Desktop 
    <ul className={styles.nav_desktop}> 
        {navItems.map(( navItem, index)=> {
            const{label, slug}= navItem;

            return <li key={index} className={styles_list_items}> 
                <Link href={`/${slug}`}> {label} </Link>
            </li> 
        })}
        </ul></nav>


}
Nav.Desktop= Desktop;

  const Mobile = ({ closeHandler }) => {
    const NavItems=getMobileNavItems();
    const mobileNavVariants={
        closed:{
left:'-100%'
        },
        open:{
left:0,
        }
    }
    return (
      <nav className={styles.nav_mobile}>
    <motion.nav
      className={styles.nav_mobile}
      initial="closed"
      animate="open"
      variants={mobileNavVariants}/>
        <ButtonUI icon="close" clickHandler={closeHandler} />
        <ul className={styles.nav_list}>
        <motion.ul
  className={styles.nav_list} 
  variants={ListVariants} 
>
<motion.ul
  className={styles.nav_list} 
  variants={listVariants} 
>
  {navItems.map((navItem, index) => {
    const { label, slug } = navItem;
    return (
      <motion.li
        key={index}
        className={styles.nav_item}
        variants={itemVariants} 
      >
        <Link href={slug}>
          {label}
        </Link>
      </motion.li>
    );
  })}
</motion.ul>

</motion.ul>
  {navItems.map((navItem, index) => {
    const { label, slug } = navItem;
    return (
      <li key={index} className={styles.nav_item}>
        <Link href={slug}>
          {label}
        </Link>
      </li>
    );
  })}
</ul>
        
      </nav>
    );
  };
  
  Nav.Mobile = Mobile;
  
  export default Nav; 