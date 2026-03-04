const User = ({name, location, email}) => {
    return (
        <div className="user-card">
            <h1>Name: {name }</h1>
            <p>Location: {location }</p>
            <p>Email: {email }</p>
        </div>
    )
}

export default User;