export const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  let listItems = []
  sortedMessages.map(message => {
    listItems.push(
      { 
        title: 'User',
        id: message.id,
        text: message.text,
        date: new Date(message.created_at),
        unread: 0,
      }
    );
  });

  return listItems;
};