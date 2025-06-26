import data from "./data/data4";

import "../App.css";
import { useEffect, useReducer, useState } from "react";
import movies from "./data/data4";

const reducer = (state, action) => {
  if (action.type === "ADD_MOVIE") {
    const newMovie = [...state.movies, action.payload];
    return {
      ...state,
      movies: newMovie,
      shNotification: true,
      notificationText: "Pridano!",
    };
  }
  if (action.type === "EMPTY_INPUT") {
    return {
      ...state,
      shNotification: true,
      notificationText: "Nemuzes mit prazdne policko!",
    };
  }
  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      shNotification: false,
    };
  }
  if (action.type === "DELETE_ITEM") {
    const filteredItems = state.movies.filter(
      (movie, id) => id !== action.payload
    );
    return {
      ...state,
      movies: filteredItems,
      shNotification: true,
      notificationText: `${action.payload} Item Deleted!`,
    };
  }

  return alert("Chyba - neni shoda s action.type!");
};
const defaultState = {
  movies: [],
  shNotification: false,
  notificationText: "",
};

const Modal = ({ text, close }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      close();
    }, 2000);
    return () => clearInterval(interval);
  });
  return (
    <div className="modal-box">
      <p className="modal-text">{text}</p>
      <button onClick={close}>Clear</button>
    </div>
  );
};

const Project4Reducer = () => {
  //  const [movies, setMovies] = useState(data);
  //  const [shNotification, setShNotification] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  function submitForm(event) {
    event.preventDefault();

    if (movieName) {
      const newMovie = { id: new Date().getTime(), name: movieName };
      dispatch({ type: "ADD_MOVIE", payload: newMovie });
      setMovieName("");
    } else {
      dispatch({ type: "EMPTY_INPUT" });
    }
  }
  function changeTextHandler(event) {
    setMovieName(event.target.value);
  }
  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };
  function deleteItem(index) {
    dispatch({ type: "DELETE_ITEM", payload: index });
  }

  return (
    <>
      {state.shNotification && (
        <Modal text={state.notificationText} close={closeNotification} />
      )}
      <form onSubmit={submitForm}>
        <input type="text" value={movieName} onChange={changeTextHandler} />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ul>
          {state.movies.map((item, index) => (
            <li key={index}>
              <div>
                <p>{item.name}</p>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project4Reducer;
