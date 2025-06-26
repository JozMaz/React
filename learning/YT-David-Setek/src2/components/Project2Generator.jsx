import { useState } from "react";
import text from "./data/data1";

const Project2Generator = () => {
  const [vysl, setVysl] = useState([]);
  const [count, setCount] = useState();

  function onSubmitHandler(event) {
    event.preventDefault();

    let myCount = count;
    if (myCount < 0) {
      myCount = 1;
    }
    setCount(myCount);

    setVysl(text.slice(0, myCount));
  }
  function onChangeHandler(event) {
    setCount(event.target.value);
  }

  return (
    <article>
      <form onSubmit={onSubmitHandler}>
        <p>Odstavce</p>
        <input type="number" onChange={onChangeHandler} />
        <input type="submit" value="Submit" />
      </form>
      {vysl.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </article>
  );
};

export default Project2Generator;
