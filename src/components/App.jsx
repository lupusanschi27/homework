import React from 'react';

import List from './List.jsx';
import Form from './Form.jsx';
import AuthorForm from './AuthorForm.jsx'
import { useState } from 'react';

const App = () => {

  const [selectedId, setSelectedId] = useState('');
  console.log(selectedId)
  return(

  <div className='row mt-5'>
    <div className='col-md-4 offset-md-1'>
      <h2>Articles</h2>

      <List  setSelectedId={setSelectedId}/>

    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>Add a new article</h2>

      <Form />

    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>Change author's name</h2>

      <AuthorForm selectedId={selectedId}/>

    </div>
  </div>
)};

export default App;