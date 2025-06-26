import { useState } from "react";
import { useNavigate } from "react-router";

import "./New.css";
import { db } from "../config/config";

const New = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [time, setTime] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function imageChangeHandler(e) {
    setImage(e.target.value);
  }
  function ageChangeHandler(e) {
    setAge(e.target.value);
  }
  function timeChangeHandler(e) {
    setTime(e.target.value);
  }

  const navigate = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();
    if (title === "" || image === "" || age === "" || time === "") {
      alert("Pro odeslani je nutno zadat vsechny informace!");
    } else {
      const newMovie = { title, image, age, time };

      try {
        const database = await db.collection("moviess");
        if (database) {
          await db.collection("movies").add(newMovie);
        }
        navigate("/movies");
      } catch (err) {
        alert(err.message);
      }

      setTitle("");
      setImage("");
      setAge("");
      setTime("");
    }
  }

  return (
    <div className="form-container">
      <h2>Add Movie</h2>
      <form onSubmit={formSubmit} className="contact-form">
        <label>
          Title
          <input
            type="text"
            onChange={titleChangeHandler}
            placeholder="Harry Potter"
            value={title}
          />
        </label>
        <label>
          URL
          <input
            type="text"
            onChange={imageChangeHandler}
            placeholder="https://..."
            value={image}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            onChange={ageChangeHandler}
            placeholder="18"
            min="0"
            value={age}
          />
        </label>
        <label>
          Time
          <input
            type="number"
            onChange={timeChangeHandler}
            placeholder="mins"
            min="0"
            value={time}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default New;
