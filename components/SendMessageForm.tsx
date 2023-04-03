import * as React from 'react';
import { useState } from 'react';

const SendMessageForm = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const addNewMessage = () => {
    console.log(message);
    setMessage('');
    addMessage(message);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <textarea
        style={{ borderRadius: 10, padding: 20, width: '60%' }}
        value={message}
        placeholder="write something..."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        style={{
          borderRadius: 5,
          backgroundColor: '#0A8AFB',
          margin: 10,
          fontWeight: 'bold',
          width: '10%',
          height: 50,
        }}
        onClick={() => addNewMessage()}
      >
        Send
      </button>
    </div>
  );
};

export default SendMessageForm;
