import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './App';
import './style.css';
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

const url ='https://jsonplaceholder.typicode.com/users';

export default function App() {
  function fetchUsers() {
    return fetch(url).then(
      res => res.json()
    )
  }

  const { data, status } = useQuery('users', fetchUsers);
  if (status === 'loading') return <p>Loading...</p>

  return (
    <div>
      <ReactQueryDevtools/>
      <h1>React query</h1>
      <ul>
        {data && data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('root'));
