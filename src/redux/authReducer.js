const SET_AUTH_DATA = 'SET_AUTH_DATA';

const defaultState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default: return state;
    }
}

export const setAuthData = (userId, email, login) => ({type: SET_AUTH_DATA, data: {userId, email, login}});


export default authReducer;