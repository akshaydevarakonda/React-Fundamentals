function Profile(){
    const name ="Akshay"
    const age="20"
    const isstudent=true
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age:{age}</p>
            <p>{isstudent === true ? "He is a Student" : "Not a student"}</p>
        </div>
    )
}

export default Profile