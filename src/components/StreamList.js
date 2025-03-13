import React, { useState } from "react";

function StreamList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setList([...list, input]);
      console.log("StreamList:", [...list, input]); // Display in console
      setInput("");
    }
  };

  return (
    <div>
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie or show"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
