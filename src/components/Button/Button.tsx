import { forwardRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, icon, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={clsx(styles.button, styles[variant], className)} {...rest}>
        {icon && icon}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
