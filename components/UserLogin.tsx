import * as React from 'react';
import { useState } from 'react';

const UserLogin = ({ setNewUser }) => {
  const [user, setUser] = useState('');

  const login = () => {
    localStorage.setItem('User', user);
    setNewUser(user);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <input
        style={{ borderRadius: 10, padding: 10, width: '40%' }}
        value={user}
        placeholder="user"
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button
        style={{
          borderRadius: 5,
          backgroundColor: '#0A8AFB',
          margin: 10,
          fontWeight: 'bold',
          width: '10%',
          height: 30,
        }}
        onClick={() => login()}
      >
        submit
      </button>
    </div>
  );
};

export default UserLogin;
