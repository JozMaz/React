import { useEffect, useState } from "react";
import Deleting from "./comp/Deleting";
import DecreaseButton from "./comp/DecreaseButton";
import IncreaseButton from "./comp/IncreaseButton";
import ResetButton from "./comp/ResetButton";
import TitleButton from "./comp/TitleButton";

import "../App.css";

function Project1() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState(0);

  useEffect(() => {
    const button = document.querySelector(".btn");
    if (counter === 0) {
      button.textContent = "Klikni";
    } else {
      button.textContent = `Klik cislo ${counter}`;
    }
  }, [counter]);

  useEffect(() => {
    document.title = `Ahoj ${title}`;
  }, [title]);

  function increaseClickHandler() {
    setCounter(counter + 1);
  }
  function decreaseClickHandler() {
    setCounter(counter - 1);
  }
  function resetClickHandler() {
    setCounter(0);
    setTitle(0);
  }
  function titleClickHandler() {
    setTitle(title + 1);
  }

  return (
    <>
      {counter}
      <IncreaseButton onClick={increaseClickHandler} className="btn" />
      <DecreaseButton onClick={decreaseClickHandler} />
      <TitleButton onClick={titleClickHandler} />
      <ResetButton onClick={resetClickHandler} />
      <Deleting />
    </>
  );
}
export default Project1;
