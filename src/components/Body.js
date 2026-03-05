import ResCards from "./ResCards"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import useRestaurants from "../utils/useRestaurants"

const Body = () => {
    const { listRest, originalList, searchText, setSearchText, setOriginalList, setListRest } = useRestaurants()
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) return <h1>Look like you'r offline!! Please check your internet connection!!!</h1>
    if (listRest.length === 0) {
        return <Shimmer />
    } 
    return (
        <div className="body max-w-7xl mx-auto px-4">
            <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-2 w-full max-w-md">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search restaurants..."
                        className="flex-1 outline-none px-3 py-2"
                    />

                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                        onClick={() => {
                            const filtered = originalList.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setListRest(filtered);
                        }}
                    >
                        Search
                    </button>

                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 mb-6 flex-wrap">
                <button
                    className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-sm"
                    onClick={() => {
                        const filterList = originalList.filter(res => res.info.avgRating > 4);
                        setListRest(filterList);
                    }}
                >
                    ⭐ Top Rated
                </button>

                <button
                    className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 shadow-sm"
                    onClick={() => {
                        const pizza = originalList.filter(res =>
                            res.info.cuisines.some(item => item.includes("Pizza"))
                        );
                        setListRest(pizza);
                    }}
                >
                    🍕 Pizza
                </button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listRest.map((restaurants) => (
                    <Link
                        to={"/listRestaurantMenu/" + restaurants.info.id}
                        key={restaurants.info.id}
                    >
                        <ResCards resData={restaurants} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body