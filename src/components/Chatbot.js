import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Nút chatbot (luôn hiển thị) */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#007bff',
          borderRadius: '50%',
          width: 56,
          height: 56,
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          fontSize: 24,
          zIndex: 1000,
        }}
        aria-label="Open Chatbot"
        title="Open Chatbot"
      >
        <FaComments />
      </button>

      {/* Popup Chatbot */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            width: 320,
            height: 400,
            backgroundColor: 'white',
            borderRadius: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              backgroundColor: '#007bff',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
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
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: 'auto',
              fontSize: 14,
              color: '#333',
            }}
          >
            {/* Nội dung chat, bạn có thể thêm input, message, logic bot ở đây */}
            <p>Feature in development. Coming soon ...</p>
          </div>
          <div style={{ padding: 8, borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              placeholder="Type a message..."
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                borderRadius: 4,
                border: '1px solid #ccc',
              }}
              // bạn thêm logic gửi tin nhắn vào đây
            />
          </div>
        </div>
      )}
    </>
  );
}
