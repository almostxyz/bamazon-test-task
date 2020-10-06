import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import { Wrapper } from '../components/Wrapper'
import { LOGGED_IN_KEY } from '../utils/constants'

export const Profile: React.FC<{}> = () => {
    const history = useHistory()
    return (
        <Wrapper>
            <Text textAlign='center' fontSize='5xl'>Имя Фамилия</Text>
            <Flex mt={4} textAlign='center'>
                <Button
                    type='reset'
                    variantColor='teal'
                    ml='auto'
                    mr='auto'
                    onClick={() => {
                        localStorage.removeItem(LOGGED_IN_KEY)
                        history.push('/login')
                    }}
                >
                    Выйти
                </Button>
            </Flex>
        </Wrapper>
    )
}