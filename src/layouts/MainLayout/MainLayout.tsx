import { Outlet } from 'react-router';
import styles from './MainLayout.module.scss';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
