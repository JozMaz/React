import PropTypes from "prop-types";
import defaultImage from "../../assets/book-default.jpg";
import { useEffect } from "react";

const Book = ({ id, image, title, price }) => {
  console.log("image prop:", image);
  useEffect(() => {
    console.warn("Testovací warning – měl by být vidět v konzoli!");
  }, []);
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h2>{id}</h2>
      <img src={image} />
      <h4>{title}</h4>
      <p>{price} kc</p>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Book.defaultProps = {
  //image: defaultImage,
  title: "Default title",
  price: 0,
};

export default Book;
