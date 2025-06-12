import { useState } from "react";
import movies from "./data/data2";
import categories from "./data/data2categories";
import "../App.css";

const Project5Films = () => {
  const [content, setContent] = useState("");

  function clickHandler(category) {
    setContent(category);
  }

  let vysledneFilmy = movies.filter((movie) => {
    return movie["category"] === content;
  });

  return (
    <>
      <div>
        {categories.map((category, index) => (
          <button key={index} onClick={() => clickHandler(category)}>
            {category}
          </button>
        ))}
      </div>
      <div>
        {vysledneFilmy.map((film) => (
          <div key={film.id}>
            <img src={film.image} />
            <h4>{film.title}</h4>
            <p>{film.age}</p>
            <p>{film.tags}</p>
            <p>{film.description}</p>
            <p>{film.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project5Films;
