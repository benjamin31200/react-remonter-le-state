import React from 'react';
import Search from './components/Search';
import './App.css';

export default function App() {
  const [users, setUsers] = React.useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin'
  ]);
  const [searchValue, setSearchValue] = React.useState('');
  console.log({users})
  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      {users.includes(searchValue) === true ? 
      <p>{searchValue}</p> :
      users.map(user => (
        <p>{user}</p>))
      }
    </div>
  );
}
