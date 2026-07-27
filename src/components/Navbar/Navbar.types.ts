import type { Dispatch, RefObject, SetStateAction } from 'react';

export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  burgerBtnRef: RefObject<HTMLButtonElement | null>;
}
