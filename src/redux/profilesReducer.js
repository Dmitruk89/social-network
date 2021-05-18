const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Olga', status: 'I am a mother', location: {city: 'Frankfurt', country: 'Germany'}},
        {id: 3, followed: false, fullName: 'Nadia', status: 'I am a wife', location: {city: 'Minsk', country: 'Belarus'}}
    ]
}

const profilesReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
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
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default profilesReducer;