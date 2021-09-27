function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return false;
  }
  min = Math.ceil(min);
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomNumber(0, 10);//basicweb.ru/javascript/js_math_random.php

//Кекстограм

const getString = function(str, maxLength) {
  if(str <= maxLength) {
    return true;
  }else{
    return false;
  }
};
getString(50, 120);
