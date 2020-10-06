import {
    Book,
    PagesActionTypes,
    SET_PAGE,
    SET_PAGE_BOOKS
} from '../constants/types'

export const setPage = (pageNumber: number): PagesActionTypes => ({
    type: SET_PAGE,
    payload: {
        pageNumber
    }
})

export const setPageBooks = (books: Book[]): PagesActionTypes => ({
    type: SET_PAGE_BOOKS,
    payload: {
        books
    }
})