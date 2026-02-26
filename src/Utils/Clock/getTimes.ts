export const getTimes = (date: Date, is24Hour: boolean = true) => {
  let h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  let ampm = '';

  if (!is24Hour) {
    ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
  }

  return {
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
    ampm,
  };
};
