import conversationLogo from '../images/logo.svg';

export const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

export const mapConversations = conversations => {
  let listItems = []
  conversations.map(conversation => {
    listItems.push(
      { 
        avatar: conversationLogo,
        title: conversation.title,
        subtitle: 'message',
        id: conversation.id,
        date: new Date(),
        unread: 0,
      }
    );
  });

  return listItems;
};