import { useState } from "react";
import img1 from "../assets/smp_i3.png";

const Accordion = ({ title, description, isOpen, onClick }) => {
    return (
        <div onClick={onClick} className="mb-4 cursor-pointer shadow-md shadow-gray-150 p-4">
            <h1 className="text-2xl font-semibold text-gray-800">
                {title}
            </h1>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px] mt-2 border-t-[#007bff] border-y-2 border-b-0' : 'max-h-0'}`}>
                <p className="text-lg text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

const AboutUs = () => {
    const [selectedAccordion, setSelectedAccordion] = useState(null);

    const aboutUsData = [
        {
            title: "Admin portal",
            description: "Oversee your institute's operations with an intuitive, user-friendly dashboard that houses all your administrative information in one place. Get rid of time-consuming, paper-laden manual processes with built-in automation tools."
        },
        {
            title: "Student portal",
            description: "Students can now view their schedules, check attendance records, access course materials, and submit assignments. It's a one-stop platform for them to manage their academic life effectively."
        },
        {
            title: "Faculty portal",
            description: "Staff can access their portal to manage courses, update lesson plans, track student progress, and communicate with students. It simplifies administrative tasks and allows them to focus on what matters most—teaching."
        },
        {
            title: "Parent portal",
            description: "Help parents stay informed about their child's academic progress, attendance, and upcoming events. They can also communicate with teachers and the school administration, fostering better collaboration."
        }
    ];

    const handleAccordionClick = (index) => {
        setSelectedAccordion(selectedAccordion === index ? null : index);
    };

    return (
        <section className="flex flex-col max-h-[85vh] p-10 bg-gray-90 justify-center gap-6">
            <div className="flex flex-col justify-center items-center w-full gap-3">
                <h1 className="text-4xl font-bold text-gray-800 text-center">Portals for Every User Persona</h1>
                <p className="text-xl text-gray-600 text-center mx-[100px]">Personalized portals offer multiple perspectives with customized access to information and services. This helps enhance communication, transparency, and collaboration amongst all stakeholders.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="w-full lg:w-1/2 space-y-4 p-7">
                    {aboutUsData.map((value, index) => (
                        <Accordion
                            key={index}
                            title={value.title}
                            description={value.description}
                            isOpen={selectedAccordion === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
                <div className="p-3">
                    <img src={img1} alt="school image" className="w-[50vw] h-[50vh]" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
