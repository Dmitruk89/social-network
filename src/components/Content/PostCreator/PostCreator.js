import styles from './PostCreator.module.scss';
import Avatar from '../../Avatars/Avatar';
import PostButton from '../../Buttons/PostButton';


function PostCreator (){
    return (
        <div className={styles.postCreator}>
            <Avatar size='small' />
            <PostButton active='inactive' value='Project' />
            <PostButton active='active' value='Job' />
        </div>
    )
}

export default PostCreator