import * as React from 'react';
import { useEffect, useState } from 'react';
import ChatBoxRecevier from './ChatBoxReceiver';
import ChatBoxSender from './ChatBoxSender';
import SendMessageForm from './SendMessageForm';
import UserLogin from './UserLogin';

const ChatContainer = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('User'));
  const [userTyping, setUserTyping] = useState('');

  const logout = () => {
    localStorage.removeItem('User');
    setUser('');
    setChats([]);
  };

  useEffect(() => {
    // socket on user typing
    //socket.on('typing', user => { setUserTyping(user + 'is typing...')});
    // soccket on new message
    console.log('socket get chats');
  });

  const sendMessageToSocket = (message) => {
    console.log('broadcast the message');
  };

  const userTypingToSocket = (message) => {
    console.log('broadcast the user that typing');
  };

  const addMessage = (message) => {
    const newChat = { message, user };
    setChats([...chats, newChat]);
    sendMessageToSocket(message);
  };

  const userTypingHandle = (message) => {
    if (message == '') {
      setUserTyping('');
    } else {
      setUserTyping(user + ' is typing...');
      userTypingToSocket(user);
    }
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
    <div>
      <button
        style={{
          top: 0,
          position: 'fixed',
          right: 0,
          borderRadius: 5,
          border: 'none',
          backgroundColor: '#FAA180',
          fontWeight: 'bold',
          width: '10%',
          height: 30,
          margin: 10,
        }}
        onClick={() => logout()}
      >
        logout
      </button>
      <h4>userName: {user}</h4>
      {userTyping}
      {chatList()}
      <div style={{ position: 'static', bottom: 20, width: '100%' }}>
        <SendMessageForm
          addMessage={addMessage}
          userTypingHandle={userTypingHandle}
        />
      </div>
    </div>
  ) : (
    <UserLogin setNewUser={setUser} />
  );
};

export default ChatContainer;
