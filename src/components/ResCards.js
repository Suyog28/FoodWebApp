import { CARD_URL } from "../utils/constants";

const ResCards = (props) => {
    const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } = props.resData.info;
    return (
        <div className="res-cards">
            <img src={`${CARD_URL}/${cloudinaryImageId}`} alt="food-dish" className="res-img" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
}

export default ResCards