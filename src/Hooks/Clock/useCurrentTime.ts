'use client';

import { useState, useEffect } from 'react';

export const useCurrentTime = (is24Hour: boolean) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [is24Hour]);

  const getFormattedTime = () => {
    let hoursNum = time.getHours();
    const minutesNum = time.getMinutes();
    const secondsNum = time.getSeconds();

    const ampm = hoursNum >= 12 ? 'PM' : 'AM';

    if (!is24Hour) {
      hoursNum = hoursNum % 12;
      hoursNum = hoursNum ? hoursNum : 12;
    }

    const hours = String(hoursNum).padStart(2, '0');
    const minutes = String(minutesNum).padStart(2, '0');
    const seconds = String(secondsNum).padStart(2, '0');

    return { hours, minutes, seconds, ampm };
  };

  return getFormattedTime();
};
