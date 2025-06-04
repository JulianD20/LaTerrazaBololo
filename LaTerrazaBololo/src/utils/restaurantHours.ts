import { format, parse, isWithinInterval, set } from 'date-fns';

export const isRestaurantOpen = () => {
  const now = new Date();
  const currentDay = now.getDay();
  
  // Get current time in HH:mm format
  const currentTime = format(now, 'HH:mm');
  
  // Create Date objects for opening and closing times
  const createTimeDate = (timeStr: string) => {
    return parse(timeStr, 'HH:mm', now);
  };

  let openingTime: Date;
  let closingTime: Date;

  // Monday to Thursday (1-4)
  if (currentDay >= 1 && currentDay <= 4) {
    openingTime = createTimeDate('17:00'); // 5:00 PM
    closingTime = createTimeDate('23:30'); // 11:30 PM
  } else {
    // Friday to Sunday and holidays (5-0)
    openingTime = createTimeDate('16:00'); // 4:00 PM
    closingTime = createTimeDate('23:59'); // 11:59 PM
  }

  // Set the times to today's date for proper comparison
  const todayOpenTime = set(now, {
    hours: openingTime.getHours(),
    minutes: openingTime.getMinutes(),
    seconds: 0,
    milliseconds: 0
  });

  const todayCloseTime = set(now, {
    hours: closingTime.getHours(),
    minutes: closingTime.getMinutes(),
    seconds: 0,
    milliseconds: 0
  });

  return isWithinInterval(now, {
    start: todayOpenTime,
    end: todayCloseTime
  });
};