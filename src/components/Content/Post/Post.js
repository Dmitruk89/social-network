import styles from './PostCreator.module.scss';
import Avatar from '../../Avatars/Avatar';


function Post (){
    return (
        <div className={styles.postCreator}>
            <Avatar size='small' />
        </div>
    )
}

export default Post