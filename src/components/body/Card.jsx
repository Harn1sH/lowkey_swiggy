export default function Card({ data }) {
  const { info } = data;
  return (
    <div>
      <img
        src={` https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`}
        alt="temp"
      />
      <div>{info.name}</div>
      <div>{info.costForTwo}</div>
    </div>
  );
}
