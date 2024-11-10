const Card = ({ title, children }) => {
    return (
        <div className="flex flex-1 flex-col max-h-[40vh] min-h-[40vh]">
            <div className="p-3 bg-gray-200">
                <h1 className="text-xl text-black">{title}</h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card;