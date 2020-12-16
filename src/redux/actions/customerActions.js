import axios from 'axios'
// import Swal from 'sweetalert2'

var path = 'http://localhost:8080/api'

// ****************
// ERROR HANDLER
// ****************

const customerActions = {

    addCustomer: customer => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/customers`, customer)
            // dispatch({
            //     type: 'CUSTOMER',
            //     payload: {customer: response.data.customer}
            // })
        }
    },

    getCustomerInfo: customerId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/customers/${customerId}`)
            dispatch({
                type: 'CUSTOMER',
                payload: {customerInfo: response.data.customerInfo}
            })
        }
    },

    getCustomerPurchasedBooks: customerId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/customers/${customerId}/books`)
            dispatch({
                type: 'CUSTOMER',
                payload: {purchasedBooks: response.data.purchasedBooks}
            })
        }
    },

    buyBook: (customerId, book) => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/customers/${customerId}/books`, book)
        }
    }
}

export default customerActions