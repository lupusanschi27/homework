import { ADD_ARTICLE, ARTICLES_RETRIEVED } from '../constants/action-types';

const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
}

const articlesRetrieved = (payload) => {
  return { type: ARTICLES_RETRIEVED, payload };
}

export { addArticle, articlesRetrieved };
