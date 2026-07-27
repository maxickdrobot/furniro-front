import type { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}
