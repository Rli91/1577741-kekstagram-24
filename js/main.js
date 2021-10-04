/* eslint-disable no-unused-vars */
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

const checkStringLength = (str, maxStringLength) => str.length <= maxStringLength;
checkStringLength();

//Задание 4.9

const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AUTHOR_NAMES = [
  'Александр',
  'Михаил',
  'Мария',
  'Анастасия',
];

const OBJECTS_AMOUNT = 25;

const LIKES = {
  min: 15,
  max: 200,
};

const COMMENTS = {
  min: 1,
  max: 3,
};

const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = function (array) {
  return array[getRandom(0, array.length - 1)];
};

const getCommentsArray = function (randomAmount) {

  for (let i = 0; i < randomAmount; i++) {
    COMMENTS = {
      avatar: 'img/avatar-{getRandom(1, 6)}.svg',
      message: getRandomArrayElement(COMMENTS_LIST),
      name: getRandomArrayElement(AUTHOR_NAMES),
    };
  }

  return COMMENTS;
};

const getQuantityArray = function (objectsAmount) {
  for (let i = 1; i <= objectsAmount; i++) {
    objectsAmount = {
      url: `photos/${i}.jpg`,
      description: 'photo description',
      likes: getRandom(LIKES.min, LIKES.max),
      comments: getCommentsArray(getRandom(COMMENTS.min, COMMENTS.max)),
    };
  }

  return objectsAmount;
};
