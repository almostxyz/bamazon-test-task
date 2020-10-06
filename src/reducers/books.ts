import { BooksState, BooksActionTypes, SET_ALL_BOOKS, Book } from "../constants/types";

const initialState: BooksState = {
    books: [{'id': '0', title: '', author: ''}]
}

const booksReducer = (state = initialState, action: BooksActionTypes): BooksState => {
    switch (action.type) {
        case SET_ALL_BOOKS:
            return {
                ...state, books: action.payload.books
            }
        default: return state
    }
}

export const setAllBooks = (books: Book[]) => ({ type: SET_ALL_BOOKS, payload: { books } })
export const getBooksCount = (state: BooksState) => state.books.length
export const getAllBooks = (state: BooksState) => state.books

export default booksReducer