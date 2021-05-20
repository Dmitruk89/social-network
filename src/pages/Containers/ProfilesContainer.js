import Profiles from '../Profiles/Profiles';
import Preloader from '../../components/Common/Preloader';
import {connect} from 'react-redux';
import { follow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching, toggleIsFollowing  } from '../../redux/profilesReducer';
import React from 'react';
import {usersAPI} from '../../api/api';

class ProfilesContainer extends React.Component {
   
    componentDidMount(){
            this.props.toggleIsFetching();
            usersAPI.getUsers(this.props.currentPage, this.props.perPage).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
                this.props.toggleIsFetching();
            });
    }

    onPageChange = (page) => {
        this.props.toggleIsFetching();
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.perPage).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching();
            });
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader />
        } else {
            return (
                    <Profiles
                    totalUsers={this.props.totalUsers}
                    perPage={this.props.perPage}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                    isFollowing={this.props.isFollowing}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { 
        users: state.profilesPage.users,
        perPage: state.profilesPage.perPage,
        totalUsers: state.profilesPage.totalUsers,
        currentPage: state.profilesPage.currentPage,
        isFetching: state.profilesPage.isFetching,
        isFollowing: state.profilesPage.isFollowing,
    }
}


export default connect(mapStateToProps, 
    {
        follow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        toggleIsFetching,
        toggleIsFollowing
    }
    )(ProfilesContainer);