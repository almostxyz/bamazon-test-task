import { Book, PagesActionTypes, PageState, SET_PAGE, SET_PAGE_BOOKS } from "../constants/types"

const initialState: PageState = {
    books: [],
    pageSize: 5,
    currentPage: 1
}

const pagesReducer = (state = initialState, action: PagesActionTypes): PageState => {
    switch (action.type) {
        case SET_PAGE:
            return { ...state, currentPage: action.payload.pageNumber }
        case SET_PAGE_BOOKS:
            return { ...state, books: action.payload.books }
        default:
            return state
    }
}

export const setPage = (pageNumber: number) => ({ type: SET_PAGE, payload: { pageNumber } })
export const setPageBooks = (books: Book[]) => ({ type: SET_PAGE_BOOKS, payload: { books } })

export const getPageBooks = (state: PageState) => state.books
export const getPageSize = (state: PageState) => state.pageSize
export const getCurrentPage = (state: PageState) => state.currentPage

export default pagesReducer