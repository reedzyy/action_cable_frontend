import React from 'react';
import { MessageList } from 'react-chat-elements';
import NewMessageForm from '../forms/conversations/NewMessageForm';
import {orderedMessages} from '../../utils/messages';

const MessagesArea = ({
  conversation: { id, messages },
}) => {
  return (
    <div className='ch-messages'>
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={orderedMessages(messages)} />
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;