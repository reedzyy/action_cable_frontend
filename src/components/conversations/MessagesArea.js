import React from 'react';
import { MessageList } from 'react-chat-elements';
import NewMessageForm from '../forms/conversations/NewMessageForm';

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className='ch-messages'>
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: 'left',
            type: 'text',
            text: 'Second message',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'First message',
            date: new Date(),
          },
        ]} />
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};