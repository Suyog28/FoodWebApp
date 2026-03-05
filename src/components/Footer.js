import { Link } from "react-router";
const Footer = () => {
    return (
        <footer className="bg-[#FC8019] text-white mt-12">

            <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold">MyFoodApp</h2>
                    <p className="text-sm mt-2 text-orange-100">
                        Delicious food delivered to your doorstep.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>

                    <ul className="space-y-1 text-sm">
                        <li className="hover:text-black">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="hover:text-black">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="hover:text-black">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="hover:text-black">
                            <Link to="/InstamartStores">Stores</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>

                    <p className="text-sm">📍 Pune, Maharashtra</p>
                    <p className="text-sm">📞 +91 98765 43210</p>
                    <p className="text-sm">✉ support@myfoodapp.com</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-orange-500 text-center py-3 text-sm text-orange-100">
                © {new Date().getFullYear()} MyFoodApp
            </div>

        </footer>
    )
}

export default Footer; 