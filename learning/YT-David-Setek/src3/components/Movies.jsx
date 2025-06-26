import allMovies from "./data/data2";
import { db } from "../firebase/config";
import "../App.css";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import Form from "./Form";

const Movies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  function changeInputHandler(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    const unsubscribe = db.collection("movies").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No films...");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((item) => {
            result.push({ id: item.id, ...item.data() });
          });
          setData(result);
          setError("");
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let filteredMovies = data.filter((item) =>
      item.title.toLowerCase().replace(/\s+/g, "").includes(text.toLowerCase())
    );
    setMovies(filteredMovies);
  }, [text, data]);

  function deleteMovie(id) {
    db.collection("movies").doc(id).delete();
  }

  return (
    <>
      <h2>Movies</h2>
      <input
        type="text"
        onChange={changeInputHandler}
        placeholder="Search..."
        value={text}
      />
      <div className="items">
        {error ? (
          <p>{error}</p>
        ) : (
          movies.map((item, index) => (
            <div key={index}>
              <div className="items-item">
                <NavLink to={`/movies/${item.id}`}>
                  <p>{item.id}</p>
                  <img src={item.image} />
                  <h2>{item.title}</h2>
                  <p>{item.age}+</p>
                  <p>{item.time}min</p>
                </NavLink>
              </div>
              <button onClick={() => deleteMovie(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
      <Form />
    </>
  );
};

export default Movies;
