// components/MessageList.js
import MessageItem from './MessageItem';

// Remove 'messagesEndRef' from the props
export default function MessageList({ messages }) {
  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <MessageItem key={index} user={msg.user} text={msg.text} />
      ))}

      {/* We've removed the empty div with the ref */}
    </div>
  );
}