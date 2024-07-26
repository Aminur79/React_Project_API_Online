import React, { useState } from 'react'
import userData from './Data/Data';


function App() {
  const [users, setUsers] = useState(userData);
  return (
    <div class="d-inline-flex bg-info">
      <ul>
        <li>ID</li>
        <li>NAME</li>
        <li>AGE</li>
      </ul>
      {
        users.map((used) => (

          <ul>
            <li>{used.id}</li>
            <li>{used.name}</li>
            <li>{used.age}</li>
          </ul>
        ))
      }
    </div>
  )
}


export default App