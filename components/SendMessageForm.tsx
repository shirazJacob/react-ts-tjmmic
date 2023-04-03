import * as React from 'react';
import { useState } from 'react';

const SendMessageForm = ({ addMessage, userTypingHandle }) => {
  const [message, setMessage] = useState('');

  const addNewMessage = () => {
    console.log(message);
    setMessage('');
    userTypingHandle('');
    addMessage(message);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    userTypingHandle(e.target.value);
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
        onChange={(e) => handleChange(e)}
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
