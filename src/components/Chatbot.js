import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import '../css/chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Coming soon...' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null); // ref để scroll

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = { sender: 'bot', text: 'Coming soon...' };
      setMessages(prev => [...prev, botReply]);
    }, 0);

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto scroll to bottom khi messages thay đổi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="chatbot-button"
        aria-label="Toggle Chatbot"
        title="Toggle Chatbot"
      >
        <FaComments />
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            Chatbot
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: 18,
              }}
              aria-label="Close Chatbot"
              title="Close Chatbot"
            >
              <FaTimes />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} style={{ margin: '4px 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    borderRadius: 12,
                    backgroundColor: msg.sender === 'user' ? 'var(--ifm-color-primary)' : '#f1f1f1',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Auto scroll đến đây */}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      )}
    </>
  );
}
