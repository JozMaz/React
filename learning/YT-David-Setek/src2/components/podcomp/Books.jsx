import Book from "./Book";
import data from "../data/data7";

const Books = () => {
  return (
    <>
      {data.map((item, index) => (
        <Book key={index} {...item} />
      ))}
    </>
  );
};

export default Books;
