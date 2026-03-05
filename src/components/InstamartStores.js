const InstamartStores = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50">

            {/* Icon */}
            <div className="text-6xl mb-4">🛒</div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800">
                Instamart coming soon to your city
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 mt-3 max-w-md">
                We're working hard to bring super-fast grocery delivery to your area.
                Stay tuned!
            </p>

            {/* Button */}
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                Notify Me
            </button>

        </div>
    )
}

export default InstamartStores