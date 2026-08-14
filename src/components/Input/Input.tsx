import clsx from 'clsx';
import styles from './Input.module.scss';
import type { InputProps } from './Input.types';

const Input = ({ className, variant = 'primary', ...rest }: InputProps) => {
  return <input className={clsx(styles.input, styles[variant], className)} {...rest} />;
};

export default Input;
