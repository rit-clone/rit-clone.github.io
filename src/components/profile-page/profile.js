import "./profile.css";

const Profile = ({name}) => {
    return (
        <div className="profile">
            <h1 style={{"font-size": "3rem"}}>Who are you watching?</h1>
            <div className='profile-icon'/>
            <div className='profile-text'>{name}</div>
        </div>
    );
};

export default Profile;