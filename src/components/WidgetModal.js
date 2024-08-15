import React, { useState } from 'react';

function WidgetModal({ onAddWidget, onClose }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAdd = () => {
    const newWidget = { id: Date.now(), name, text };
    onAddWidget(newWidget);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Add Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default WidgetModal;
