import ResCards from "./ResCards"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import useRestaurants from "../utils/useRestaurants"

const Body = () => {
    const { listRest, originalList, searchText } = useRestaurants()
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) return <h1>Look like you'r offline!! Please check your internet connection!!!</h1>
    if (listRest.length === 0) {
        return <Shimmer />
    }
    return (
        <div className='body'>
            <div className="your-choice">
                <div className="search">
                    <input type="text" name="search" id="search" value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={() => {
                        const filtered = originalList.filter(res =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListRest(filtered);
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button onClick={
                        () => {
                            const filterList = originalList.filter(res => res.info.avgRating > 4)
                            setListRest(filterList)
                        }
                    }>Top Rated</button>

                    <button onClick={() => {
                        const pizza = originalList.filter(res => res.info.cuisines.some(item => item.includes("Pizza")))
                        setListRest(pizza)
                    }}>Pizza</button>
                </div>
            </div>
            <div className="res-container">
                {listRest.map((restaurants) => <Link to={"/listRestaurantMenu/" + restaurants.info.id} key={restaurants.info.id}>
                    <ResCards resData={restaurants} />
                </Link>)}
            </div>
        </div>
    )
}

export default Body