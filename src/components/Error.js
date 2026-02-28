import { useRouteError } from "react-router"

const Error = () =>{
    const error = useRouteError();
    return (
        <div>
            <h1>{error.statusText}</h1>
             <h1>{error.status}</h1>
        </div>
    )
}

export default Error;