import { Link } from "react-router"
import { LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className='header'>
            <div>
                <Link to="/"><img src={LOGO_URL} alt="Logo" width={50} /></Link> 
            </div>
            <div className='list'>
                <ul >
                    <li>Status:{onlineStatus ? " ✅":" 🔴"}</li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/InstamartStores">Stores</Link></li>
                    <li><Link>SIGN IN</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header