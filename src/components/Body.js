import { useEffect, useState } from "react"
import ResCards from "./ResCards"
import { SW_URL_API } from "../utils/constants"
import Shimmer from "./Shimmer"
import { Link } from "react-router"

const Body = () => {
    const [listRest, setListRest] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SW_URL_API)
        const json = await data.json();
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        const filtered = restaurants.filter(item => item?.info?.cloudinaryImageId !== "rng/md/carousel/production/indian101")
        setOriginalList(filtered)
        setListRest(filtered)
    }

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
                {listRest.map((restaurants) => <Link to={"/listRestaurantMenu/"+ restaurants.info.id} key={restaurants.info.id}>
                    <ResCards  resData={restaurants} />
                </Link>)}
            </div>
        </div>
    )
}

export default Body