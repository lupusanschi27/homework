const fetchArticles = async (dispatch, getState) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  dispatch({ type: 'ADD_ARTICLE', payload: data })
};

export default fetchArticles;
