import * as React from 'react';
import { useEffect, useState } from 'react';
import ChatBoxRecevier from './ChatBoxReceiver';
import ChatBoxSender from './ChatBoxSender';
import SendMessageForm from './SendMessageForm';
import UserLogin from './UserLogin';

const ChatContainer = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('User'));

  const logout = () => {
    localStorage.removeItem('User');
    setUser('');
  };

  useEffect(() => {
    console.log('socket get chats');
  });

  const sendMessageToSocket = (message) => {
    console.log('broadcast the message');
  };

  const addMessage = (message) => {
    const newChat = { message, user };
    setChats([...chats, newChat]);
    sendMessageToSocket(message);
  };

  const chatList = () => {
    return chats.map((chat, index) => {
      if (chat.user == user)
        return <ChatBoxSender key={index} user={user} message={chat.message} />;
      else
        return (
          <ChatBoxRecevier key={index} user={user} message={chat.message} />
        );
    });
  };

  return user ? (
    <div style={{ height: '100vh' }}>
      user: {user}
      <button
        style={{
          borderRadius: 5,
          border: 'none',
          backgroundColor: '#FAA180',
          margin: 10,
          fontWeight: 'bold',
          width: '10%',
          height: 30,
        }}
        onClick={() => logout()}
      >
        logout
      </button>
      {chatList()}
      <SendMessageForm addMessage={addMessage} />
    </div>
  ) : (
    <UserLogin setNewUser={setUser} />
  );
};

export default ChatContainer;
