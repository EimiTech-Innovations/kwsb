import { Button } from "../ui/button";
import logo from '../../assets/Images/kwslogo.ico'
import { Link } from "react-router";

const Navbar = () => {

    return (
        <header className="text-gray-600 body-font border-b-1 border-gray-200">
            <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto mt-4">
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <a className="mr-5 hover:text-gray-900">Events</a>
                    <a className="mr-5 hover:text-gray-900">Gallery</a>
                    <a className="mr-5 hover:text-gray-900">Videos</a>
                    <Link to="/about" className="mr-5 hover:text-gray-900">About Us</Link>

                </nav>
                <Link to={"/"} className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src={logo} width={100} height={100} alt="KWS bangalore" />

                </Link>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-3">
                    <Button className="inline-flex items-center text-white bg-indigo-500 border-0 py-6 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Contact Us
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Button>
                </div>
                <h1 className="text-center mx-auto text-3xl font-extrabold tracking-widest -mt-4"> KUKI WORSHIP SERVICE BANGALORE</h1>
            </div>
        </header>
    )
};


export default Navbar; 