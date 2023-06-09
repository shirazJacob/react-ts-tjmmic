import * as React from 'react';

const ChatBoxSender = (props: { user: string; message: string }) => {
  const { user, message } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
      }}
    >
      <span
        style={{
          backgroundColor: '#F3F0F0',
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

export default ChatBoxSender;
