import styles from './Avatar.module.scss';


function Avatar(props){
    return (
        <div className={`${styles.avatar} ${styles[props.size]}`}></div>
    )
}

export default Avatar