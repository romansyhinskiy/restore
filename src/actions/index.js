const booksLoaded = (newBook) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBook
    }
}
const booksRequested = () => {
    return{
        type: 'FETCH_BOOKS_REQUESTED'
    }
}
const booksError = error => {
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}
export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}
const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) =>dispatch(booksLoaded(data)))
        .catch(error =>dispatch(booksError(error)))
}

export  { fetchBooks  }