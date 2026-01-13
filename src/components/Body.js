import { useEffect, useState } from "react"
import ResCards from "./ResCards"
import { SW_URL_API } from "../utils/constants"
import Shimmer from "./Shimmer"

const Body = () => {
    const [listRest, setListRest] = useState([]);
    const [searchText, setSearchText] = useState(" ");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SW_URL_API)
        const json = await data.json();
        setListRest(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                        setListRest(
                            listRest.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                        );
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button onClick={
                        () => {
                            const filterList = listRest.filter(res => res.info.avgRating > 4)
                            setListRest(filterList)
                        }
                    }>Top Rated</button>

                    <button onClick={() => {
                        const pizza = listRest.filter(res => res.info.cuisines.some(item => item.includes("Pizza")))
                        setListRest(pizza)
                    }}>Pizza</button>
                </div>
            </div>
            <div className="res-container">
                {listRest.map((restaurants) => <ResCards key={restaurants.info.id} resData={restaurants} />)}
            </div>
        </div>
    )
}

export default Body