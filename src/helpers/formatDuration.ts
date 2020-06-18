import moment from 'moment';

export default (duration: moment.Duration): string => {
  const formattedArray = [`${duration.minutes()}`, `${duration.seconds()}`];

  if (duration.minutes() < 10) {
    formattedArray[0] = `0${duration.minutes()}`;
  }

  if (duration.seconds() < 10) {
    formattedArray[1] = `0${duration.seconds()}`;
  }

  if (duration.hours()) {
    formattedArray.unshift(`${duration.hours()}`);
  }

  return formattedArray.join(':');
};