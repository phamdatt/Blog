
function Profile({ firstName, lastName, age }) {
    const isFullName = firstName && lastName
    return (
        <div className="container">
            {
                isFullName && (<h1 data-testid="full-name">{firstName} {lastName}</h1>)
            }
            <h1 data-testid="age">{age}</h1>
        </div>
    )
}

export default Profile;