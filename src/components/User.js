const User = ({name, location, email}) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex items-center gap-4">

            {/* Avatar */}
            <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border"
            />

            {/* User Info */}
            <div>

                <h2 className="text-lg font-semibold text-gray-800">
                    {name}
                </h2>

                <p className="text-gray-500 text-sm">
                    📍 {location}
                </p>

                <p className="text-gray-600 text-sm">
                    ✉️ {email}
                </p>

            </div>

        </div>
    )
}

export default User;