const getRandomNumber = (min, max) => {
  if(min < 0 || max < 0 || min >= max) {
    return 0;
  }

  min = Math.ceil(min);
  return Math.floor(Math.random() * (max - min)) + min;
};

getRandomNumber(0, -8);

//basicweb.ru/javascript/js_math_random.php

//Кекстограм

const checkStringLength = (str, maxStringLength) => str <= maxStringLength;
checkStringLength();
