import { useRef } from 'react';
import { NavLink } from 'react-router';
import clsx from 'clsx';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.types';

import useOnClickOutside from '@/hooks/useOnClickOutside';
import Button from '../Button/Button';

import AccountAlertOutlineIcon from '@/assets/icons/account-alert-outline.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import HeartIcon from '@/assets/icons/heart.svg?react';
import ShopingCartOutlineIcon from '@/assets/icons/shopping-cart-outline.svg?react';

const Navbar = ({ isOpen, setIsOpen, burgerBtnRef }: NavbarProps) => {
  const navbarRef = useRef<HTMLElement>(null);

  const handleCloseMenu = (): void => {
    setIsOpen(false);
  };

  useOnClickOutside([burgerBtnRef, navbarRef], () => {
    if (isOpen) {
      handleCloseMenu();
    }
  });

  return (
    <nav ref={navbarRef} className={clsx(styles.navbar, isOpen && styles.open)}>
      <Button className={styles.navClose} onClick={handleCloseMenu}></Button>
      <ul className={styles.navmenu}>
        <li className={styles.navmenuItem}>
          <NavLink to='/' className={styles.navmenuLink} onClick={handleCloseMenu}>
            Home
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/shop' className={styles.navmenuLink} onClick={handleCloseMenu}>
            Shop
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/about' className={styles.navmenuLink} onClick={handleCloseMenu}>
            About
          </NavLink>
        </li>
        <li className={styles.navmenuItem}>
          <NavLink to='/contact' className={styles.navmenuLink} onClick={handleCloseMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className={styles.navActions}>
        <li className={styles.navActionsItem}>
          <Button variant='icon' onClick={handleCloseMenu}>
            <AccountAlertOutlineIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon' onClick={handleCloseMenu}>
            <SearchIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon' onClick={handleCloseMenu}>
            <HeartIcon />
          </Button>
        </li>
        <li className={styles.navActionsItem}>
          <Button variant='icon' onClick={handleCloseMenu}>
            <ShopingCartOutlineIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
