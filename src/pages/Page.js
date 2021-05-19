import styles from './Page.module.scss';
import Dialogs from './Dialogs/Dialogs';
import Homepage from './Homepage/Homepage';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import ProfilesContainer from './Containers/ProfilesContainer';
import {Switch, Route} from 'react-router-dom';

const Page = (props) => {

    return (
            <div className={styles.contentArea}>
                <Switch>
                    <Route exact path="/" >
                        <Homepage />
                    </Route>
                    <Route path="/profile/:userId" >
                        <ProfilePageContainer />
                    </Route>
                    <Route path="/dialogs" >
                        <Dialogs />
                    </Route>
                    <Route path="/profiles" >
                        <ProfilesContainer />
                    </Route>
                </Switch>
            </div>
    )
}

export default Page;