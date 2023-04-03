import * as React from 'react';

const ChatBoxRecevier = ({ user, message }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}
    >
      <span
        style={{
          backgroundColor: '#E3FBE3',
          padding: '15px',
          fontFamily: 'Arial',
          borderRadius: '10px',
        }}
      >
        <b style={{ fontSize: '16px' }}>{user}:</b>
        <br />
        {message}
      </span>
    </div>
  );
};

export default ChatBoxRecevier;
