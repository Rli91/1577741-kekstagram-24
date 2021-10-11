import {getRandomNumber, getRandomArrayElement} from './utils';
import {COMMENTS_LIST, LIKES, COMMENTS, OBJECTS_AMOUNT, AUTHOR_NAMES, DESCRIPTIONS} from './utils';


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
    };
  }

  return photos;
};

export {getQuantityArray};
