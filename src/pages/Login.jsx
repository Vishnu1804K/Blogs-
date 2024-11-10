import img1 from "../assets/classroom.webp";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="flex items-center justify-center w-full h-screen bg-gray-100">
            <div className="w-[70vw] h-[60vh] flex flex-row shadow-lg shadow-gray-150">
                <div className="flex-1">
                    <img src={img1} alt="Classroom" className="h-full" />
                </div>
                <div className="flex-1 flex flex-col gap-4 px-5 justify-center">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center">Login Now</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                    <h3 className="text-start">Not Registered Yet ?? <Link to="/register" className="pointer text-blue-600">Register Now</Link></h3>
                </div>
            </div>
        </section>
    );
}

export default Login;
