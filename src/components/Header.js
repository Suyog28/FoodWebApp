import { Link } from "react-router"
import { LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex justify-between bg-[#FC8019] shadow-lg'>
            <div>
                <Link to="/"><img src={LOGO_URL} alt="Logo" className="w-20"/></Link> 
            </div>
            <div className='flex items-center px-4 mx-4'>
                <ul className="flex text-white ">
                    <li className="px-2 hover:text-black hover:font-medium">Status:{onlineStatus ? " ✅":" 🔴"}</li>
                    <li className="px-2 hover:text-black hover:font-medium"><Link to="/">Home</Link></li>
                    <li className="px-2 hover:text-black hover:font-medium"><Link to="/about">About</Link></li>
                    <li className="px-2 hover:text-black hover:font-medium"><Link to="/contact">Contact</Link></li>
                    <li className="px-2 hover:text-black hover:font-medium"><Link to="/InstamartStores">Stores</Link></li>
                    <li className="px-2 hover:text-black hover:font-medium"><Link>Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header