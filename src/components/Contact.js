const Contact = () =>{
    return(
        <div className="min-h-screen bg-gray-50 py-12 px-6">

            <div className="max-w-5xl mx-auto">

                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                    <p className="text-gray-500 mt-2">
                        We'd love to hear from you. Send us a message and we'll respond soon.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <h2 className="text-xl font-semibold mb-4 text-gray-700">
                            Get in Touch
                        </h2>

                        <p className="text-gray-600 mb-3">
                            📍 Pune, Maharashtra, India
                        </p>

                        <p className="text-gray-600 mb-3">
                            📞 +91 98765 43210
                        </p>

                        <p className="text-gray-600">
                            ✉ support@myfoodapp.com
                        </p>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <form className="space-y-4">

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact;