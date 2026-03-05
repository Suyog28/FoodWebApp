import { CARD_URL } from "../utils/constants";

const ResCards = (props) => {
    const { name, cloudinaryImageId, costForTwo, avgRating, cuisines,sla } = props.resData.info;
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer overflow-hidden">
           
            <div className="overflow-hidden"><img src={`${CARD_URL}/${cloudinaryImageId}`} alt="food-dish" className="res-img" /></div> 
            <div className="p-4">
                {/* Restaurant Name */}
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {name}
                </h3>

                {/* Rating + Delivery */}
                <div className="flex items-center justify-between mt-2 text-sm text-gray-600">

                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                        ⭐ {avgRating}
                    </span>

                    <span>
                        {sla?.deliveryTime} mins
                    </span>

                </div>
                {/* Cuisines */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {cuisines.join(", ")}
                </p>
            </div>
        </div>
    );
}

export default ResCards