import { Outlet } from 'react-router';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <header>Header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
