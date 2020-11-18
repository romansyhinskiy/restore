const booksLoaded = (newBook) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBook
    }
}

export default booksLoaded