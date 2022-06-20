const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_ARTICLE': {
      return {
        ...state,
        articles: [payload,...state.articles]
      }
    }

    case 'MODIFY_AUTHOR': {
      const newState = state.articles.map(article => {

        if(article.id === payload.id){
          return {
            ...article,
            author: payload.author
          }
        }else{
          return article
        }
      })
      return {
        ...state,
        articles: newState
      }
    }

    default:
      return state;
  }
}

export default rootReducer;
