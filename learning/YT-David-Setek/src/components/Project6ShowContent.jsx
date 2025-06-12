import Question from "./comp/Question";
import questions from "./data/data3";

import "../App.css";

export default function Projekt6ShowContent() {
  return (
    <div>
      {questions.map((item, index) => (
        <Question key={index} title={item.title} info={item.info} />
      ))}
    </div>
  );
}
