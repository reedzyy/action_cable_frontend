import React from 'react';
import { API_ROOT, HEADERS } from '../../../constants/constants';
import { Input, Button } from 'react-chat-elements';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="ch-messages-input">
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Write a message..."
            multiline={false}
            rightButtons={
              <Button
                type="submit"
                color='#4E8CA6'
                backgroundColor='white'
                text='Send'
              />
            }
          />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;