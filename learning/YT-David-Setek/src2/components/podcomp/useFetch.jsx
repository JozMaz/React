import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    const getCoordinates = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setCoordinates(data);
    };
    getCoordinates();
  }, [url]);

  return { coordinates, loading };
};

export default useFetch;
