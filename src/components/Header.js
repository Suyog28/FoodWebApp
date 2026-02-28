import { Link } from "react-router"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={LOGO_URL} alt="Logo" width={50} />
            </div>
            <div className='list'>
                <ul >
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