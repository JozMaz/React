import { useState, useEffect } from "react";

import "../App.css";

const Projektik3ISS = () => {
  const URL = "http://api.open-notify.org/iss-now.json";
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [LINK, setLINK] = useState();

  let link;

  const getInfo = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setLongitude(data["iss_position"]["longitude"]);
    setLatitude(data["iss_position"]["latitude"]);
    link = `https://mapy.com/cs/zakladni?l=0&x=${longitude}&y=${latitude}&z=11`;
    setLINK(link);
  };

  useEffect(() => {
    getInfo();
  });

  return (
    <div>
      <p>Longitude: {longitude}</p>
      <br />
      <p>Latitude: {latitude}</p>
      <br />
      <p>Odkaz na</p>
      <a href={LINK} target="_blank" rel="noopener noreferrer">
        Mapy.cz
      </a>
    </div>
  );
};

export default Projektik3ISS;
