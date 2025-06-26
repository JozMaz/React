import useFetch from "./useFetch";

const url = "http://api.open-notify.org/iss-now.json";

const Coordinates = () => {
  const { coordinates, loading } = useFetch(url);
  return (
    <>
      <div>
        {loading ? (
          "loading"
        ) : (
          <div>
            <h2>Zemepisna delka</h2>
            <p>{coordinates.iss_position.longitude}</p>
            <h2>Zemepisna sirka</h2>
            <p>{coordinates.iss_position.latitude}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Coordinates;
