import { NavLink } from 'react-router';
import styles from './Navbar.module.scss';
import Button from '../Button/Button';

import AccountAlertOutlineIcon from '@/assets/icons/account-alert-outline.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import HeartIcon from '@/assets/icons/heart.svg?react';
import ShopingCartOutlineIcon from '@/assets/icons/shopping-cart-outline.svg?react';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navmenu}>
        <li className={styles.navmenuItem}>
          <NavLink to='/' className={styles.navmenuLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/shop' className={styles.navmenuLink}>
            Shop
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/about' className={styles.navmenuLink}>
            About
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/contact' className={styles.navmenuLink}>
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className={styles.navActions}>
        <li className={styles.navActionsItem}>
          <Button variant='icon'>
            <AccountAlertOutlineIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon'>
            <SearchIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon'>
            <HeartIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon'>
            <ShopingCartOutlineIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
