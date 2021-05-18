import styles from './ChartTitle.module.scss';

function ChartTitle (props){
    return (
        <div className={styles.title}>
            <h3>{props.title}</h3>   
        </div>
    )
}

export default ChartTitle