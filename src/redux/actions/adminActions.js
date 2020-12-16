import axios from 'axios'

var path = 'http://localhost:8080/api'

// ****************
// ERROR HANDLER
// ****************

/////////////////////////////////////
// SUPERADMIN ACTIONS

/////////////////////////////////////
// ADMIN ACTIONS

const adminActions = {

    // Testeada: funciona
    addAuthor: author => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/authors`, author)
            // dispatch({
            //     type: 'ADD_AUTHOR'
            // })
        }
    },

    addBookInAuthor: (book, authorId) => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/authors/${authorId}/books`, book)
        }   
    },

    // Testeada: funciona
    addStore: store => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/stores`, store)
        }
    },

    addBookInStore: (storeId, bookId, book) => {
        return async(dispatch, getState) => {
            const response = await axios.post(path + `/stores/${storeId}/books/${bookId}`, book)
        }
    },

    updateBookStockInStore: (storeId, storeBookId, stock) => {
        return async(dispatch, getState) => {
            const response = await axios.patch(path + `/stores/${storeId}/books/${storeBookId}`, stock)
        }
    }
}

export default adminActions