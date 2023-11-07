import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

export default function App() {
  function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(
      res => res.json()
    )
  }

  

  const { data, status } = useQuery('users', fetchUsers)

  console.log(data)
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
