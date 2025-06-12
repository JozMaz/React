import movies from "../data/data2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../../App.css";
import { useEffect, useState } from "react";

export default function MovieSlider() {
  const [index, setIndex] = useState(0);

  let lastItem = movies.length - 1;
  let firstItem = 0;

  function leftClick() {
    setIndex(index - 1);
  }

  function rightClick() {
    setIndex(index + 1);
  }

  useEffect(() => {
    if (index < 0) {
      setIndex(movies.length - 1);
    } else if (index > movies.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <section className="all-movies">
      <div className="all-movies-content">
        {movies.map((movie, id) => {
          let mainClass = "next-slide";
          if (id === index) mainClass = "active-slide";
          if (id === index - 1 || (index === 0 && id === movies.length - 1)) {
            mainClass = "last-slide";
          }
          return (
            <article key={id} className={mainClass}>
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </article>
          );
        })}
      </div>
      <FaArrowLeft onClick={leftClick} className="btnki" />
      <FaArrowRight onClick={rightClick} className="btnki" />
    </section>
  );
}
