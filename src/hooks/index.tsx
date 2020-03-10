/* eslint-disable consistent-return */
import { useEffect } from 'react';

/**
 *  A customized react hook that determines when a user clicks outside the component
 * @param onOuterClick
 * @param innerRef
 */
const useOuterClickNotifier = (onOuterClick: any, innerRef: any) => {
  useEffect(
    () => {
      const handleClickOut = (e: any) => innerRef.current
        && !innerRef.current.contains(e.target)
        && onOuterClick(e);
      if (innerRef.current) { // add listener only, if element exists
        document.addEventListener('click', handleClickOut);
        // unmount previous listener first
        return () => document.removeEventListener('click', handleClickOut);
      }
    },
    [onOuterClick, innerRef],
  );
};

export default useOuterClickNotifier;
