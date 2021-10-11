const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 0;
  }

min = Math.ceil(min);

return Math.floor(Math.random() * (max - min)) + min;

};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const checkStringLength = (str, maxStringLength) => str.length <= maxStringLength;

export {getRandomNumber, getRandomArrayElement, checkStringLength};
