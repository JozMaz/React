import { useContext, useState } from "react";
import MoviesContext from "./MoviesContext";

const Movies = () => {
  const { content, deleteItemHandler } = useContext(MoviesContext);
  return (
    <>
      {content.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Movies;
