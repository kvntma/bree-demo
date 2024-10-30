import { atom } from 'jotai';

export interface LastRequest {
  id: string;
  date: string;
  repaymentDate: string;
  amount: number;
  status: 'Pending' | 'Completed';
}
export const availableBalanceAtom = atom<number>(35000);
export const isTransactionSuccessAtom = atom<boolean>(false);
export const lastRequestAtom = atom<LastRequest | null>(null);
