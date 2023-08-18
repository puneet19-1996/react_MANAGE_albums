import React, { useEffect, useState } from "react";
import Post from "./Post";
const Album = (props) => {
  return (
    <>
      {props.data.map((album) => {
        return (
          <Post
            Id={album.id}
            title={album.title}
            data={props.data}
            setData={props.setData}
          />
        );
      })}
    </>
  );
};
export default Album;
