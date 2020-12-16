import axios from 'axios'

var path = 'http://localhost:8080/api'

// ****************
// ERROR HANDLER
// ****************


const bookActions = {

    // Testeada: funciona
    getAllBooks: () => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/books`)
            dispatch({
                type:'BOOKS',
                payload: {allBooks: response.data}
            })
        }
    }, 

    // Testeada: funciona
    getOneBook: bookId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/books/${bookId}`)
            dispatch({
                type:'BOOKS',
                payload: {oneBook: response.data}
            })
        }
    },

    getAllAuthors: () => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/authors`)
            dispatch({
                type:'AUTHORS',
                payload: {allAuthors: response.data}
            })
        }
    },

    getAuthorsBooks: authorId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/authors/${authorId}/books`)
            dispatch({
                type:'AUTHORS',
                payload: {authorsBooks: response.data}
            })
        }
    },

    
    getAllStores: () => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/stores`)
            dispatch({
                type:'STORES',
                payload: {allStores: response.data}
            })
        }
    },

    getOneStore: storeId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/stores/${storeId}`)
            dispatch({
                type:'STORES',
                payload: {oneStore: response.data}
            })
        }
    },

    getStoresBooks: storeId => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/stores/${storeId}/books`)
            dispatch({
                type:'STORES',
                payload: {storesBooks: response.data}
            })
        }
    },

    getBookFromAStore: (storeId, storeBookId) => {
        return async(dispatch, getState) => {
            const response = await axios.get(path + `/stores/${storeId}/books/${storeBookId}`)
            dispatch({
                type:'BOOKS',
                payload: {bookFromAStore: response.data}
            })
        }
    },

}

export default bookActions