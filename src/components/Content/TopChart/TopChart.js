import styles from './TopChart.module.scss';
import ChartTitle from '../ChartTitlte/ChartTitle';

function TopChart (props){
    return (
        <div className={styles.topChart}>
           <ChartTitle title={props.title}/>
            <p>Top List</p>
        </div>
    )
}

export default TopChart