import { forwardRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...rest }, ref) => {
    return (
      <button ref={ref} className={clsx(styles.button, styles[variant])} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
