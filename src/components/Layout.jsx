import Navbar from "../pages/Navbar";
import { FaUser, FaMoneyBill, FaBook, FaBus, FaCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";

const Layout = ({ isSideBar = true, children }) => {
    const sideNavbarData = [
        { label: "Profile", icon: <FaUser /> },
        { label: "Fees", icon: <FaMoneyBill /> },
        { label: "Exam", icon: <FaRegCalendarCheck /> },
        { label: "Transportation", icon: <FaBus /> },
        { label: "Library", icon: <FaBook /> },
        { label: "Events", icon: <FaCalendarAlt /> },
    ];

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex">
                {isSideBar && <div className="flex flex-col w-[18vw] bg-[#007bff] text-white p-4 shadow-lg">
                    {sideNavbarData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center text-lg font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-[#007bff] transition duration-300"
                        >
                            <span className="mr-3">{item.icon}</span>
                            <h1>{item.label}</h1>
                        </div>
                    ))}
                </div>}

                <div className={`flex-grow ${isSideBar && 'p-6 bg-gray-100 overflow-y-auto max-h-[90vh]'}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;
