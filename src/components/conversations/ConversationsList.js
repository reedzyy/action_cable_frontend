import React from 'react';
import { ChatList } from 'react-chat-elements'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../../constants/constants';
import Cable from '../Cable';
import { mapConversations } from '../../utils/conversations';

class ConversationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      activeConversation: null
    };
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
    this.props.handleClick(conversations, conversation.id)
  };

  render = () => {
    const { conversations } = this.state;
    return (
      <div className="ch-conversations">
        <ActionCableConsumer
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <ChatList 
          className='chat-list'
          dataSource={ mapConversations(conversations) }
          onClick={(event) => this.props.handleClick(conversations, event.id)}
        />
      </div>
    );
  };
}

export default ConversationsList;