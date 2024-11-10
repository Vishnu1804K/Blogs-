import img1 from "../assets/school.png"
import img2 from "../assets/college.png"
import img3 from "../assets/university.png"
import quotes from "../assets/quote.png"
const ContactUs = () => {
    return (
        <section className="w-full flex flex-col items-center justify-start py-8 bg-[#007bff] mt-20">
            <div className="w-full max-w-3xl px-4 py-3">
                <div className="absolute bg-yellow-100 p-5 rounded-lg text-center -mt-[12vh] w-[50vw]">
                    <h1 className="text-3xl font-semibold mb-4">A one-stop solution for</h1>
                    <div className="flex flex-row  justify-evenly items-center gap-10">
                        <img src={img1} alt="school" className="w-20 h-20 object-contain" />
                        <img src={img2} alt="college" className="w-20 h-20 object-contain" />
                        <img src={img3} alt="university" className="w-20 h-20 object-contain" />
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-24 text-center gap-7">
                    <img src={quotes} alt="quotes" className="h-20 w-20 mx-auto" />
                    <h1 className="text-5xl font-semibold mb-2 text-yellow-300">Hear from our customers</h1>
                    <p className="text-lg text-white leading-relaxed mt-4">
                        "As a small business, we were able to fully digitize our processes and improve our operations without having to break the bank! We would have spent a fortune if we had to go with other so-called 'Enterprise ERP' platforms for the same level of functionality and flexibility."
                    </p>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-yellow-300">Stephen Harrison Mirfield</h3>
                        <p className="text-lg text-white leading-relaxed mt-4">COO, Royal College of Surgeons (RCSI)</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs;