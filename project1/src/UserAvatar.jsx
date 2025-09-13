import "./UserAvatar.css"
function UserAvarar(UserAvarar){
    return(
        <div className="con">
            <img src="ak-logo-design_731343-584.avif"/>
            <p className="name">{UserAvarar.name}</p>
             <p>{UserAvarar.course}</p>
              <p>Roll No: {UserAvarar.no}</p>
               <p>Blood Group: {UserAvarar.blood}</p>
                <p>DOB: {UserAvarar.dob}</p>
        </div>
    )

}
export default UserAvarar