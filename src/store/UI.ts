import { atom } from 'jotai';

export const backdropAtom = atom(false);
export const toastAtom = atom<{
  open: boolean;
  message: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
}>({
  open: false,
  message: ''
});
