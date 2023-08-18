import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const UpdateAlbum = (props) => {
  const { data, setData } = props;
  const { id } = useParams();
  const [updatetitle, setUpdateTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((album) =>
      album.id === parseInt(id) ? { ...album, title: updatetitle } : album
    );
    setData(updatedData);
    setUpdateTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Update Your Title</label>
        <input
          value={updatetitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateAlbum;