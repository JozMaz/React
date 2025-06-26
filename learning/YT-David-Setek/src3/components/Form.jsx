import { useState } from "react";
import { db } from "../firebase/config";

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [movieAge, setMovieAge] = useState("");
  const [movieTime, setMovieTime] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    if (
      movieTitle === "" ||
      movieUrl === "" ||
      movieAge === null ||
      movieTime === null
    ) {
      alert("Musis mit zadane vsechny informace pro odeslani!");
    } else {
      let newMovie = {
        title: movieTitle,
        image: movieUrl,
        age: movieAge,
        time: movieTime,
      };
      try {
        await db.collection("movies").add(newMovie);

        setMovieTitle("");
        setMovieUrl("");
        setMovieAge("");
        setMovieTime("");
      } catch (err) {
        alert("Film nebyl pridan!" + err.message);
      }
    }
  }

  function onInputTitleChange(e) {
    setMovieTitle(e.target.value);
  }
  function onInputUrlChange(e) {
    setMovieUrl(e.target.value);
  }
  function onInputAgeChange(e) {
    setMovieAge(e.target.value);
  }
  function onInputTimeChange(e) {
    setMovieTime(e.target.value);
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        onChange={onInputTitleChange}
        placeholder="Title"
        value={movieTitle}
      />
      <br />
      <input
        type="text-area"
        onChange={onInputUrlChange}
        placeholder="Image URL"
        value={movieUrl}
      />
      <br />
      <input
        type="number"
        onChange={onInputAgeChange}
        placeholder="Age"
        min="0"
        value={movieAge}
      />
      <br />
      <input
        type="number"
        onChange={onInputTimeChange}
        placeholder="Time"
        step="10"
        min="0"
        value={movieTime}
      />
      <br />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
