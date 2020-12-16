import axios from 'axios'
// import Swal from 'sweetalert2'

var path = 'http://localhost:8080/api'

// ****************
// ERROR HANDLER
// ****************


const authActions = {

    newUser: createUser => {
        return async (dispatch, getState) => {
            console.log(createUser);
            const response = await axios.post(path + `/users`, createUser)
        }
    },

    logUser: user => {
        return async (dispatch, getState) => {
            console.log(user.email)
            const response = await axios.post(path + `/login`, {username: user.email, password:user.password})
        }
    },

//     logOutUser: () => {
//         return (dispatch, getState) => {
//         }
//     }
}

export default authActions