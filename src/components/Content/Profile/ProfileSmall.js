import styles from './ProfileSmall.module.scss';
import ViewButton from '../../Buttons/ViewButton';
import Avatar from '../../Avatars/Avatar';

function ProfileSmall (){
    return (
        <div className={styles.profileSmall}>
            <Avatar size="small" />
            <h2>John Doe</h2>
            <ViewButton value="Profile" />
        </div>
    )
}

export default ProfileSmall