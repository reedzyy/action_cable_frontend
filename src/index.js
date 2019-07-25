import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import ActionCable from 'actioncable';
import './styles/index.css';
import App from './containers/App';
import { API_WS_ROOT } from './constants/constants';

const cable = ActionCable.createConsumer(API_WS_ROOT)

ReactDOM.render(
  <ActionCableProvider cable={cable}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);