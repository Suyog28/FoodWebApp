
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
        <div className="main-menu-page">
            <div className="menu-card restaurant-header">
                <div className="restaurant-info">
                    <h1>{name}</h1>
                    <p className="restaurant-meta">
                        ⭐️ {avgRating} ({totalRatingsString}) • {cuisines?.join(", ")} • {locality}
                    </p>
                    <p className="restaurant-cost">{costForTwoMessage}</p>
                </div>
                <div className="restaurant-image">
                    <img src={`${CARD_URL}/${cloudinaryImageId}`} width={100} className="menu-card-image" />
                </div>
            </div>
            {/* menu categories */}
            <div className="menu-list">
                {data.map(category => (
                    <div className="menu-category" key={category.title}>
                        <h2>{category.title}</h2>
                        {category.itemCards.map(item => {
                            const info = item.card.info || {};
                            const price = ((info.defaultPrice || info.price) / 100).toFixed(2);
                            return (
                                <div className="info-card" key={info.id || info.name}>
                                    <div className="item-details">
                                        <p className="item-name">{info.name}</p>
                                        {info.description && <p className="item-desc">{info.description}</p>}
                                    </div>
                                    <div className="price">Rs.{price}</div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Menu;