import { useEffect, useState } from "react";
import "../App.css";

const Projektik4ISSLoading = () => {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const url = "http://api.open-notify.org/iss-now.json";

  const getInfo = async () => {
    const res = await fetch(url).then((data) => data.json());
    setLongitude(res["iss_position"]["longitude"]);
    setLatitude(res["iss_position"]["latitude"]);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <p>
          {longitude}
          <br />
          {latitude}
        </p>
      </div>
    );
  }
};

export default Projektik4ISSLoading;
