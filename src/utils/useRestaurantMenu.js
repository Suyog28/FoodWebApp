import { useState, useEffect} from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenu = (id) => {

    const [menuList, setMenuList] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [id])

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_URL}${id}`);
        const jsonData = await data.json();
        setMenuList(jsonData)
    }

    return menuList;
}

export default useRestaurantMenu;