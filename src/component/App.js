import React from 'react';
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

export default function App() {
    const fetchUsers = () => {
      return fetch(process.env.REACT_APP_URL).then(
        res => res.json()
      )
    }
  
    const { data, status } = useQuery('users', fetchUsers);
    if (status === 'loading') return <p>Loading...</p>
  
    return (
      <div className='list-container'>
        <ReactQueryDevtools/>
        <h1>React query</h1>
        <ul>
          {data && data.map(user =>{
            return(
                <li key={user.id}>{user.id} && {user.name}</li>
            )
          })}
        </ul>
      </div>
    )
}