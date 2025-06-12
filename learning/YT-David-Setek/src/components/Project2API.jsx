import { useState, useEffect } from "react";

import "../App.css";

const Project2API = () => {
  const url = "https://api.kanye.rest";
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setQuote(data["quote"]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Project2API;
