import Preloader from '../../components/Common/Preloader';

const ProfilePage = (props) => {
    if (!props.profile){
     return <Preloader />       
    } else {
        return (
            <div>
                {props.profile.fullName} PROFILE
            </div>
        )
    }
    
}

export default ProfilePage;