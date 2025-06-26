import { useParams } from "react-router";
import useMovies from "../config/useMovies";

const Movie = () => {
  const { movies, error, loading } = useMovies();
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (loading) return <p>Loadig...</p>;

  return (
    <div className="info">
      <div>
        <img src={movie.image} />
        <p>ID: {movieId}</p>
        <p>Title: {movie.title}</p>
        <p>Minimum Age: {movie.age}</p>
        <p>Time: {movie.time} min</p>
      </div>
    </div>
  );
};

export default Movie;
