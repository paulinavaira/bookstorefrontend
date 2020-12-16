const initialState = {
    allBooks: [],
    oneBook: [],
    bookFromAStore: [],
    allAuthors: [],
    authorsBooks: [],
    allStores: [],
    oneStore: [],
    storesBooks: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS':
            return {
                ...state,
                allBooks: action.payload.allBooks,
                oneBook: action.payload.oneBook,
                bookFromAStore: action.payload.bookFromAStore
            }
        case 'AUTHORS':
            return {
                ...state,
                allAuthors: action.payload.allAuthors,
                authorsBooks: action.payload.authorsBooks
            }
        case 'STORES':
            return {
                ...state,
                allStores: action.payload.allStores,
                oneStore: action.payload.oneStore,
                storesBooks: action.payload.storesBooks
            }
        default:
            return state
    }
}

export default bookReducer
