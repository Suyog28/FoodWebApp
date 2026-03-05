import React from "react"
import { USER_DATA_URL } from "../utils/constants"

class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
        console.log("Child constructor")
    }

    componentDidMount() {
        console.log("Child Did Mount")
        this.fetchData();
    }

    async fetchData(){
    const data = await  fetch(USER_DATA_URL)
    const json = await data.json()
        console.log(json)
 
        this.setState({
            users: json.users
        })
}

    render() {
        const { users } = this.state;
        console.log("Child Render")
        return (
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">Our Team</h1>
                    <p className="text-gray-500 mt-2">Meet the amazing people behind our work</p>
                </div>

                {/* Users Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {users.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-6 text-center"
                        >

                            {/* Avatar */}
                            <img
                                src={item.image}
                                alt={item.firstName}
                                className="w-24 h-24 rounded-full mx-auto object-cover border mb-4"
                            />

                            {/* User Info */}
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item.firstName + " " + item.lastName}
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                Age: {item.age}
                            </p>

                            <p className="text-gray-500 text-sm">
                                📍 {item.address.address}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        )
    }
}

export default UserClass