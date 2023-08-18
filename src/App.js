import { Routes, Route } from "react-router-dom";
import Album from "./components/Album";
import Navbar from "./components/Navbar";
import AlbumForm from "./components/AlbumForm";
import UpdateAlbum from "./components/UpdateAlbum";
import { Link } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  //fetching data through axios get request k through data show kia hai api se:-

  const url = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={<Album data={data} setData={setData} />}
        ></Route>
        <Route
          exact
          path="/albumform"
          element={<AlbumForm data={data} setData={setData} />}
        ></Route>
        <Route
          exact
          path="/updatealbum/:id"
          element={<UpdateAlbum data={data} setData={setData} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
