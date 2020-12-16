const initialState = {

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AUTHOR':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                nationality: action.payload.nationality,
                rol: action.payload.rol,
            }
        default:
            return state
    }}

export default adminReducer
