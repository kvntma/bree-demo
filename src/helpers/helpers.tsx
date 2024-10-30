export function formatCentsToDollars(cents: number): string {
  const dollars = cents / 100;
  return dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export const parseDollarsToCents = (dollars: string): number => {
  return Math.round(parseFloat(dollars.replace(/[^0-9.-]+/g, '')) * 100);
};

export const generateId = () => {
  const randomDigits = Math.floor(1000000 + Math.random() * 9000000).toString();
  return `TXN${randomDigits}`;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

export const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};
