const initialState = {
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER':
            return {
                ...state,
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer
