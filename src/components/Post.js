import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  const { data, setData } = props;

  const handleDelete = () => {
    const updatedData = data.filter((post) => post.id !== props.Id);
    setData(updatedData);
  };

  return (
    <div className="outer-box">
      <div className="album-box">
        <h3>Id: {props.Id}</h3>
        <h3>Title: {props.title}</h3>
        <img
          alt="delete album"
          src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
          style={{ height: "50px", float: "right", cursor: "pointer" }}
          onClick={handleDelete}
        />
        <br />
        <br />
        <Link to={`/updatealbum/${props.Id}`} id="update">
          Update
        </Link>
      </div>
    </div>
  );
}
