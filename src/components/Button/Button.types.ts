import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'primaryOutline' | 'icon' | 'withIcon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  icon?: ReactNode;
}
