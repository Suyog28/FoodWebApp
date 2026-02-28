import { useEffect, useState} from "react"
import { MENU_URL } from "../utils/constants"
import { CARD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const Menu = () => {

    const [menuList, setMenuList] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL)
        const jsonData = await data.json();
        setMenuList(jsonData)
    }

    const info = menuList?.data?.cards[2]?.card?.card?.info ?? {}
    const { name, cloudinaryImageId, locality, avgRating, totalRatingsString, cuisines, costForTwoMessage } = info
    console.log(info)

    if(menuList === null) return <Shimmer/>
    return (
        <div className="RestraList">
            <h1>{name}</h1>
            <p>⭐️ {avgRating} ({totalRatingsString}) Rs.{costForTwoMessage}</p>
            <p>{cuisines?.join(",")}</p>
            <p>{locality}</p>
            <img src={`${CARD_URL}/${cloudinaryImageId}`} width={100} />
        </div>
    )
}

export default Menu;