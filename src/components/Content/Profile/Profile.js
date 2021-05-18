import styles from './Profile.module.scss';
import ViewButton from '../../Buttons/ViewButton';
import Avatar from '../../Avatars/Avatar';

function Profile (){
    return (
        <div className={styles.profile}>
            <Avatar size="big" />
            <h2>John Doe</h2>
            <p>Following</p>
            <p>Followers</p>
            <ViewButton value="Profile" />
        </div>
    )
}

export default Profile