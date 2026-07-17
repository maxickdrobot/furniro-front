import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
