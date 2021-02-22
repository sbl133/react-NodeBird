
export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}
//동적으로 action을 할당하기위한 action creater
export const loginAction = (data) => {
    console.log("loginAction");
    return {
        type: 'LOG_IN',
        data,
    }
}
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case 'LOG_IN':
            console.log("login");
            return{
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'LOG_OUT':
            return{
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

export default reducer;