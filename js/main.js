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

const LIKES_AMOUNT = {
  min: 15,
  max: 200,
};

const COMMENTS_AMOUNT = {
  min: 1,
  max: 3,
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createComments = (amount) => {
  const comments = [];

  for(let i = 0; i < amount; i++) {
    comments[i] = {
      id: 1,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(AUTHOR_NAMES),
    };
  }

  return comments;
};

const getQuantityArray = (objectsAmount) => {
  const photos = [];

  for(let i = 0; i < objectsAmount; i++) {
     photos[i] = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: 'photo description',
      likes: getRandomNumber(LIKES_AMOUNT.min, LIKES_AMOUNT.max),
      comments: createComments(getRandomNumber(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max)),
    }
  }

  return photos;
};

getQuantityArray(OBJECTS_AMOUNT);
