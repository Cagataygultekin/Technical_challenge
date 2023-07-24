import React from 'react';
import FetchRepos from './FetchRepos';

const App = () => {
  return (
    <div>
      <h1>Contributed Repositories by User Name</h1>
      <FetchRepos />
    </div>
  );
};

export default App;