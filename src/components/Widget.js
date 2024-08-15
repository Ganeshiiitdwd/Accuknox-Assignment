import React from 'react';

function Widget({ widget,onRemove }) {
  return (
    <div className="flex-shrink-0 w-64 p-4 bg-gray-50 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">{widget.name}</h4>
        <button
          className="text-red-500 hover:text-red-600 font-semibold"
          onClick={onRemove}
        >
          × Remove
        </button>
      </div>
      <p className="mt-2 text-gray-700">{widget.text}</p>
    </div>
  );
}

export default Widget;
