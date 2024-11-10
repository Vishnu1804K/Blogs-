import img1 from "../assets/school.png"
import img2 from "../assets/college.png"
import pic from "../assets/graduation-hat-and-diploma.png"
import Card from "../components/Card";

const Profile = () => {
    return (
        <>
            {/* Profile Section */}
            < div className="flex justify-between p-5" >
                <div className="flex justify-center items-center">
                    <img src={img1} alt="school" className="h-10 w-10" />
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-3xl font-bold">Aurora Clark</h1>
                    <div className="flex flex-row gap-4">
                        <p className="text-gray-500 text-md">RollNo:<span className="text-bold text-md text-black">21L31A0588</span></p>
                        <p className="text-gray-500 text-md">Email Id:<span className="text-bold text-md text-black">vishnu1804ksri@gmail.com</span></p>
                        <p className="text-gray-500 text-md">Contact Number:<span className="text-bold text-md text-black">+9179745400497</span></p>
                    </div>
                </div>
                <div>
                    <img src={pic} alt="profile_pic" className="rounded h-10 w-10" />
                </div>
            </div >

            <div className="flex flex-col">
                {/* Attendance and TimeTable */}
                <div className="flex flex-row gap-1">
                    <Card title="Attendance"></Card>
                    <Card title="Results"></Card>
                </div>
                <div className="flex flex-row gap-1">
                    <Card title="Assginments"></Card>
                </div>
            </div>
        </>
    );
}

export default Profile;