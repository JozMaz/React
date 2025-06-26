import { useState } from "react";
import data from "./data/data4";
import MovieBox from "./podcomp/MovieBox";
import MoviesContext from "./podcomp/MoviesContext";

const Project5Context = () => {
  const [content, setContent] = useState(data);
  function deleteItemHandler(id) {
    let filteredItems = content.filter((item) => item.id !== id);
    setContent(filteredItems);
  }
  return (
    <MoviesContext.Provider value={{ content, deleteItemHandler }}>
      <MovieBox />
    </MoviesContext.Provider>
  );
};

export default Project5Context;
