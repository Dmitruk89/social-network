import styles from './ViewButton.module.scss';


function ViewButton (props){
    return (
        <button className={styles.viewButton}>View {props.value}</button>
    )
}

export default ViewButton