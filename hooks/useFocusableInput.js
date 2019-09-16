import { useImperativeHandle } from 'react';

export default function useFocusableInput(ref, inputRef) {
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
}