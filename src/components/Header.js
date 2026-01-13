import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={LOGO_URL} alt="Logo" width={50} />
            </div>
            <div className='list'>
                <ul >
                    <li>Home</li>
                    <li>Help</li>
                    <li>SignIn</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header