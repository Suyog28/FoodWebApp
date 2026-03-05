
function Shimmer() {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {Array(8).fill("").map((_, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                    >

                        {/* Image Skeleton */}
                        <div className="bg-gray-300 h-44 w-full"></div>

                        {/* Content Skeleton */}
                        <div className="p-4 space-y-3">

                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>

                            <div className="flex justify-between">
                                <div className="h-4 bg-gray-300 rounded w-16"></div>
                                <div className="h-4 bg-gray-300 rounded w-12"></div>
                            </div>

                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Shimmer