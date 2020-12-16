import adminReducer from './adminReducer'
import authReducer from './authReducer'
import bookReducer from './bookReducer'

const { combineReducers } = require('redux')

const rootReducer = combineReducers ({
    authReducer: authReducer,
    bookReducer: bookReducer,
    adminReducer: adminReducer
})

export default rootReducer
