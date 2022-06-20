import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const AuthorForm = ({selectedId}) => {
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch({ type: 'MODIFY_AUTHOR', payload: { id: selectedId, author} });
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author">author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={handleChange}
        />
      </div>
      <input className="btn btn-success btn-lg" type="submit" value="SAVE" />
    </form>
  );
};

export default AuthorForm