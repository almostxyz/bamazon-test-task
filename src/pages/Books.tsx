import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from '../components/Wrapper'
import { Book } from '../constants/types'
import { getAllBooks, getBooksCount, setAllBooks } from '../reducers/books'
import { getCurrentPage, getPageBooks, getPageSize, setPage, setPageBooks } from '../reducers/pages'

interface BooksProps {
    children?: React.ReactNode,
    data?: Book[]
}

export const Books: React.FC<BooksProps> = (props) => {

    const [pagesArray, setPagesArray] = useState([0])

    const bookStore = useSelector((state: any) => state.booksReducer)
    const pageStore = useSelector((state: any) => state.pagesReducer)

    const dispatch = useDispatch()
    const changePage = (pageNumber: number) => {
        dispatch(setPage(pageNumber))
        const size = getPageSize(pageStore)
        let newArray = getAllBooks(bookStore).slice((pageNumber - 1) * size, pageNumber * size)
        dispatch(setPageBooks(newArray))
    }

    useEffect(() => {
        dispatch(setAllBooks(props.data!))
        console.log('1')
    }, [dispatch, props.data])

    useEffect(() => {
        let array = Array.from({ length: Math.ceil(getBooksCount(bookStore) / getPageSize(pageStore)) }, (_, i) => i + 1)
        setPagesArray(array)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookStore])

    useEffect(() => {
        changePage(1)
        console.log('3')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookStore])


    return (
        <Wrapper variant='regular'>
            <Box minH={180}>
                {
                    getPageBooks(pageStore).map((b) => {
                        return (
                            <Flex
                                key={b.id}
                                justifyContent={'space-between'}
                            >
                                <Text fontSize="2xl">
                                    {b.title}
                                </Text>
                                <Text fontSize="2xl">
                                    {b.author}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </Box>
            <Flex
                justify='center'
            >
                {
                    pagesArray.map((p) => {
                        return (
                            <Button
                                mr={2}
                                variantColor='teal'
                                isActive={p === getCurrentPage(pageStore)}
                                key={p}
                                onClick={() => {
                                    changePage(p)
                                }}
                            >{p}
                            </Button>
                        )
                    })
                }
            </Flex>
        </Wrapper>
    )
}

