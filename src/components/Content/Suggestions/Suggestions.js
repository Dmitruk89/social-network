import styles from './Suggestions.module.scss';
import ViewButton from '../../Buttons/ViewButton';
import ChartTitle from '../ChartTitlte/ChartTitle';

function Suggestions (props){
    return (
        <div className={styles.suggestions}>
            <ChartTitle title={props.title} />
            <p>Suggestion List</p>
            <ViewButton value="More" />
        </div>
    )
}

export default Suggestions