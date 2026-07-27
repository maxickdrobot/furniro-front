import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import { useRef, useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const burgerBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleToggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} burgerBtnRef={burgerBtnRef} />
        <Button
          className={clsx(styles.burgerBtn, isOpen && styles.open)}
          onClick={handleToggleMenu}
          ref={burgerBtnRef}
        >
          <span></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
