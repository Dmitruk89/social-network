import styles from './PostButton.module.scss';


function PostButton (props){
    return (
        <button className={`${styles.postButton} ${styles[props.active]}`}>Post a {props.value}</button>
    )
}

export default PostButton