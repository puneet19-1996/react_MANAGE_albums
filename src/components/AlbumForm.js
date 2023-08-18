import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AlbumForm(props) {
  const [num, setNum] = useState(null);
  const [title, setTitle] = useState(null);

  const { data, setData } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new data object based on the input values
    const newData = {
      userId: num,
      id: Date.now(), // Generating a unique id (you can modify this as needed)
      title: title,
    };

    // Update the data array using the setData function
    setData([newData, ...data]);

    // Clear input values
    setNum(null);
    setTitle(null);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>User Id</label>
          <input
            type="number"
            value={num || ""}
            placeholder="select your id"
            onChange={(e) => setNum(e.target.value)}
            required
          />
          <label id="title">Title</label>
          <input
            type="text"
            value={title || ""}
            placeholder="Enter your text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit" id="btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
