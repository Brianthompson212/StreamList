import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [completed, setCompleted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) =>
          index === editIndex ? input : item
        );
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    setCompleted(
      completed.includes(index)
        ? completed.filter((i) => i !== index)
        : [...completed, index]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My StreamList</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="p-2 rounded mr-2"
          placeholder="Add new movie or show..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded ${
              completed.includes(index) ? 'line-through bg-gray-700' : 'bg-gray-800'
            }`}
          >
            {item}
            <div className="flex gap-2">
              <FaCheck
                className="cursor-pointer text-green-400"
                onClick={() => toggleComplete(index)}
              />
              <FaEdit
                className="cursor-pointer text-yellow-400"
                onClick={() => handleEdit(index)}
              />
              <FaTrash
                className="cursor-pointer text-red-400"
                onClick={() => handleDelete(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
