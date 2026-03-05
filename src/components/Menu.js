
import { CARD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu"


const Menu = () => {
    const { id } = useParams()
    
    const menuList = useRestaurantMenu(id); 
    
    const info = menuList?.data?.cards[2]?.card?.card?.info ?? {}
    
    const { name, cloudinaryImageId, locality, avgRating, totalRatingsString, cuisines, costForTwoMessage } = info
    
    const regularCards = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const data = regularCards?.filter((c) => c?.card?.card?.itemCards).map(item => item.card.card)
   
    if (menuList === null) return <Shimmer />
    return (
        <div className="max-w-4xl mx-auto px-4 py-6">

            {/* Restaurant Header */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

                    <p className="text-gray-600 mt-1">
                        ⭐ {avgRating} ({totalRatingsString}) • {cuisines?.join(", ")}
                    </p>

                    <p className="text-gray-500 text-sm">{locality}</p>

                    <p className="mt-2 font-semibold text-orange-500">
                        {costForTwoMessage}
                    </p>
                </div>

                <img
                    src={`${CARD_URL}/${cloudinaryImageId}`}
                    className="w-28 h-28 rounded-xl object-cover shadow-sm"
                />

            </div>


            {/* Menu Categories */}
            <div className="space-y-5">

                {data.map((category) => (
                    <div
                        key={category.title}
                        className="bg-white rounded-xl shadow-sm"
                    >

                        {/* Category Title */}
                        <h2 className="text-lg font-semibold px-5 py-4 border-b border-gray-100">
                            {category.title}
                        </h2>


                        {/* Menu Items */}
                        <div>

                            {category.itemCards.map((item) => {

                                const info = item.card.info || {};
                                const price = ((info.defaultPrice || info.price) / 100).toFixed(2);

                                return (

                                    <div
                                        key={info.id || info.name}
                                        className="flex justify-between items-center px-5 py-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition"
                                    >

                                        <div className="max-w-lg">

                                            <p className="font-medium text-gray-800">
                                                {info.name}
                                            </p>

                                            <p className="text-green-600 text-sm font-medium mt-1">
                                                ₹{price}
                                            </p>

                                            {info.description && (
                                                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                                                    {info.description}
                                                </p>
                                            )}

                                        </div>

                                        <button className="border border-green-500 text-green-600 px-4 py-1 rounded-md text-sm font-semibold hover:bg-green-500 hover:text-white transition">
                                            ADD
                                        </button>

                                    </div>

                                );
                            })}

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}


export default Menu;