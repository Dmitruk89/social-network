import Profiles from '../Profiles/Profiles';
import Preloader from '../../components/Common/Preloader';
import {connect} from 'react-redux';
import { follow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching } from '../../redux/profilesReducer';
import * as axios from 'axios';
import React from 'react';

class ProfilesContainer extends React.Component {
   
    componentDidMount(){
        if (this.props.users.length === 0){
            this.props.toggleIsFetching();
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.perPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                this.props.toggleIsFetching();
            });
        }
    }

    onPageChange = (page) => {
        this.props.toggleIsFetching();
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.perPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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
        isFetching: state.profilesPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsers: (totalUsers) => {
//             dispatch(setTotalUsersAC(totalUsers))
//         },
//         toggleIsFetching: () => {
//             dispatch(toggleIsFetchingAC())
//         }
//     }
// }

export default connect(mapStateToProps, 
    {
        follow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        toggleIsFetching,
    }
    )(ProfilesContainer);