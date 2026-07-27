import { useEffect, type RefObject } from 'react';

const useOnClickOutside = (refs: RefObject<Element | null>[], callback: () => void) => {
  useEffect(() => {
    const listener = (event: PointerEvent) => {
      const target = event.target as Node;

      const clickedInside = refs.some((ref) => ref.current?.contains(target));

      if (clickedInside) return;

      callback();
    };

    window.addEventListener('pointerdown', listener);

    return () => {
      window.removeEventListener('pointerdown', listener);
    };
  }, [refs, callback]);
};

export default useOnClickOutside;
