import { useEffect, useState } from "react";
import data from "./data/data8";

const Project8SearchFiltering = () => {
  const [movies, setMovies] = useState(data);
  const [searchText, setSearchText] = useState("");

  let filteredMovies;

  useEffect(() => {
    filteredMovies = data.filter((item) =>
      item.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchText.toLowerCase())
    );
    setMovies(filteredMovies);
  }, [searchText]);

  function changeInputHandler(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={changeInputHandler}
          value={searchText}
          placeholder="Search film..."
        />
      </div>
      <div>
        {movies.map((item, index) => (
          <div key={index} className="item">
            <p>{item.id}</p>
            <img src={item.image} />
            <h2>{item.title}</h2>
            <p>{item.age}</p>
            <p>{item.tags}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project8SearchFiltering;
