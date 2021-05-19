import React from "react";
import ProfilePage from './ProfilePage';
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile, toggleIsFetching } from '../../redux/profilePageReducer';
import { withRouter } from "react-router";
import Preloader from '../../components/Common/Preloader';

class ProfilePageContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching();
        const userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
                this.props.toggleIsFetching();
            });
    }

    render(){
        if (this.props.isFetching) {
            return <Preloader />
        } else {
            return (
                <div>
                    <ProfilePage {...this.props} profile={this.props.profile}/>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching
})

const ProfilePageContainerWR = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
})(ProfilePageContainerWR);