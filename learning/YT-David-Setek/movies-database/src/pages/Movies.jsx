import { Link } from "react-router";
import useMovies from "../config/useMovies";
import { RiDeleteBinLine } from "react-icons/ri";
import { db } from "../config/config";

const Movies = () => {
  const { movies, error, loading } = useMovies();

  function deleteClickHandler(idecko) {
    if (
      confirm("Tato akce je nevratna. Jste si jisti, ze chcete zaznam smazat?")
    ) {
      db.collection("movies").doc(idecko).delete();
    }
  }

  return (
    <div>
      {error && alert("Nejde se pripojit k teto databazi!")}
      {loading && <p>Loading...</p>}
      <div className="cards">
        {movies.map((item, index) => (
          <div
            key={item.id}
            className="cards-item"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <RiDeleteBinLine
              className="delete-icon"
              onClick={() => deleteClickHandler(item.id)}
            />
            <Link to={`/movie/${item.id}`}>
              <div>
                <h3>{item.title}</h3>
                <img src={item.image} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
