import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchArticles } from '../thunk';

const List = ({setSelectedId}) => {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles);
  }, []);


  return (
    <ul className='list-group list-group-flush'>
      {articles.map(article => (
        <li onClick={() => setSelectedId(article.id)}className='list-group-item' key={article.id}>
          <p><b>Article name:</b> {article.title}</p>
          <p><b>Article author:</b> {article.author}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
