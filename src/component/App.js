import React from 'react';

export default function App() {
    function fetchUsers() {
      return fetch(process.env.REACT_APP_URL).then(
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