// below line we did props destructuring, like some cool developers
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food image" />
      <div className="card-text">
        <h2>{name}</h2>
        <h3>{cuisines.slice(0, 3).join(", ")}</h3>
        <h4>{avgRating}⭐</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
