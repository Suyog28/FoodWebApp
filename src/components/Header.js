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
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about"><li>ABOUT US</li></Link>
                    <Link to="/contact"><li>CONTACT US</li></Link>
                    <Link><li>SIGN IN</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header