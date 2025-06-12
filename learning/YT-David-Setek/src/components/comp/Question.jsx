import { useState } from "react";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  function onClickHandler() {
    setShow(!show);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onClickHandler}>Answer</button>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;
