import type { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}
