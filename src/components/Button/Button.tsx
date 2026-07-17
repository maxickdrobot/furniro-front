import styles from './Button.module.scss';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Button;
