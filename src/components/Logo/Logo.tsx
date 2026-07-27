import { Link } from 'react-router';
import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.types';
import LogoIcon from '@/assets/images/logo.svg?react';

const Logo = ({ variant = 'primary' }: LogoProps) => {
  return (
    <div className={styles.logo}>
      <Link to='/' className={styles.link}>
        {variant === 'primary' && (
          <>
            <div className={styles.icon}>
              <LogoIcon />
            </div>
            <span className={styles.label}>Furniro</span>
          </>
        )}
      </Link>
    </div>
  );
};

export default Logo;
