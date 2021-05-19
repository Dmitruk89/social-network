const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [ ],
    perPage: 9,
    totalUsers: 20,
    currentPage: 1,
    isFetching: false,
}

const profilesReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if( user.id === action.userId){
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});

export default profilesReducer;