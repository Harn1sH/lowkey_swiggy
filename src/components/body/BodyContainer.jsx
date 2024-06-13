import { restData } from "../../assets/constants.js";
import Card from "./Card.jsx";

export default function BodyContainer() {
  console.log(restData);
  return (
    <div className="grid grid-cols-4 gap-4">
      {restData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
