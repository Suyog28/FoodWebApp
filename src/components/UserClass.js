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
            <div>
            <div className="our-team-title"><h1>Our Team</h1></div>
            <div className="users-list" >
                {users.map((item) => 
                (
                    <div className="user-card" key={item.id}>
                        <div>
                            <h2>{item.firstName + " " + item.lastName}</h2>
                            <h3>Age: {item.age}</h3>
                            <h4>Location: {item.address.address}</h4>
                        </div>
                        <img src={item.image}></img>
                    </div>
                )
               )}
                </div>
            </div>
        )
    }
}

export default UserClass