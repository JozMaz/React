import { useParams } from "react-router";
import data from "./data/data2"; // zatím zachováme
// ideálně by ses měl připojovat na Firestore

const Info = () => {
  const { id } = useParams();
  const item = data.find((itemos) => itemos.id.toString() === id);

  if (!item) {
    return <p>Film nebyl nalezen!</p>;
  }

  return (
    <div className="item">
      <p>{item.id}</p>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <p>{item.age}</p>
      <p>{item.tags}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Info;
