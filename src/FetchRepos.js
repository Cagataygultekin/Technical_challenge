import React, { useState } from 'react';

const FetchRepos = () => {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);

  //Talking with the Github API
  async function fetchRepositories(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data;
  }
  //After submit the username
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchRepositories(username);
    //controls if array is empty
    if (Array.isArray(data)) {
      setRepositories(data);
    } else {
      setRepositories([]);
    }
    console.log(repositories);
    setRepositories(data);
    console.log('Submitted username:', username);
    console.log('Data:', data);
    //Reset username
    setUsername('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        GitHub Username: &ensp;
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username" /> &ensp;
      </label>
      <button type="submit">Fetch Repositories</button>
    </form>
    <ul>
    {repositories.map((repo) => (
      <li key={repo.id}>{repo.name}</li>
    ))}
    </ul>
    </div>
  );
};

export default FetchRepos;