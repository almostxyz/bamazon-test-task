export const SET_PAGE = 'SET_PAGE'
export const SET_PAGE_BOOKS = 'SET_PAGE_BOOKS'
export const SET_ALL_BOOKS = 'SET_ALL_BOOKS'

export interface Book {
    id: number | string,
    title: string,
    author: string
}

export interface BooksState {
    books: Book[],
    // все книги храню в сторе, чтоб не заморачиваться, т.к. нет апишки
    // с апишкой делал бы запросы постранично
}

export interface PageState {
    books: Book[],
    currentPage: number,
    pageSize: number
}

interface SetAllBooksAction {
    type: typeof SET_ALL_BOOKS
    payload: {
        books: Book[]
    }
}

interface SetPageAction {
    type: typeof SET_PAGE,
    payload: {
        pageNumber: number
    }
}

interface SetPageBooksAction {
    type: typeof SET_PAGE_BOOKS
    payload: {
        books: Book[]
    }
}

export type PagesActionTypes = SetPageBooksAction | SetPageAction
export type BooksActionTypes = SetAllBooksAction 