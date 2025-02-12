export const formatDate = (date: Date | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
};

export const formatPHA = (pha: string): string => {
  if (pha === 'Y') return 'Yes';
  if (pha === 'N') return 'No';
  return '';
};