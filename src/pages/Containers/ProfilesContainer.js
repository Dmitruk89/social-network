import Profiles from '../Profiles/Profiles';
import {connect} from 'react-redux';
import { followAC, setUsersAC } from '../../redux/profilesReducer';

const mapStateToProps = (state) => {
    return { 
        users: state.profilesPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);