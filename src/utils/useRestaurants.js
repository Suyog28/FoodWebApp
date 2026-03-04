import { useEffect, useState } from "react";
import { SW_URL_API } from "./constants";

const useRestaurants = () => {
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


    return { listRest, originalList, searchText}
}

export default useRestaurants;