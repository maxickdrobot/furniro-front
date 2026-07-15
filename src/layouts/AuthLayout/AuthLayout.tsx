import { Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
