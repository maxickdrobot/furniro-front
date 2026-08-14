import type { InputHTMLAttributes } from 'react';

type InputTypes = 'primary' | 'secondary';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputTypes;
}
