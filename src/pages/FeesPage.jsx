import { FaExclamationCircle, FaListAlt, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const FeesPage = () => {
    const feeData = [
        {
            count: "10",
            title: "Unpaid Fee List",
            img: <FaExclamationCircle className="text-red-500 text-3xl" />,
            color: "bg-red-200",
            borderColor: "border-red-700",
        },
        {
            count: "10",
            title: "Overall Fee List",
            img: <FaListAlt className="text-blue-500 text-3xl" />,
            color: "bg-blue-200",
            borderColor: "border-blue-700",
        },
        {
            count: "10",
            title: "Due Fee Amount",
            img: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
            color: "bg-yellow-200",
            borderColor: "border-yellow-700",
        },
        {
            count: "10",
            title: "Paid Fee List",
            img: <FaCheckCircle className="text-green-500 text-3xl" />,
            color: "bg-green-200",
            borderColor: "border-green-700",
        },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {feeData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-row justify-around items-center bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border-r-4 ${item.borderColor}`}
                    >
                        <div>
                            <h2 className="text-4xl font-semibold text-[#007bff] mb-2">{item.count}</h2>
                            <p className="text-md font-medium text-gray-700 text-center">{item.title}</p>
                        </div>
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-4`}>
                            {item.img}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeesPage;
