import { Component } from "react"
import UserClass from "./UserClass"
class About extends Component  {
    constructor() {
        super()
    }

    componentDidMount() {
    }
    render() {
        return(
            <div>
                <UserClass name={"Suyog Muley (class)"} location={"Pune"} email={"suyogvmuley@gmail.com"} />
            </div>
        )
    }
}

export default About;