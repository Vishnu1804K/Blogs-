import { Link } from "react-router-dom";
import logo from "../assets/graduation-hat-and-diploma.png"
const Navbar = () => {
    return (
        <div className="flex justify-between h-20 w-full px-10 items-center shadow-lg shadow-gray-150">
            <div>
                <h3 className="flex items-center font-mono text-2xl gap-3">
                    <img src={logo} alt="logo" className="h-10" /> Genius
                </h3>
            </div>
            <div className="flex items-center gap-3">
                <Link to="/" className="pointer hover:border-b-2 border-[#007bff]">AboutUs</Link>
                <Link to="/" className="pointer hover:border-b-2 border-[#007bff]">ContactUs</Link>
                <Link to="/login" className="border-[#007bff] rounded-lg p-1 px-4 border-2 hover:bg-[#007bff] hover:text-white">Login</Link>
            </div>
        </div>
    );
}
export default Navbar;
