import React from 'react'
import { Formik, Form } from 'formik'
import { Wrapper } from '../components/Wrapper'
import { LOGGED_IN_KEY } from '../utils/constants'
import { Box, Button, Flex } from '@chakra-ui/core'
import { InputField } from '../components/InputField'
import { useHistory } from 'react-router-dom'

export const Login: React.FC<{}> = ({ }) => {
    // fake login request
    const login = async (values: any) => {
        return new Promise((resolve) => {
            if (values.username === 'admin' && values.password === 'password') {
                setTimeout(() => {
                    localStorage.setItem(LOGGED_IN_KEY, 'true')
                    resolve(true)
                }, 1000)
            } else {
                resolve(false)
            }

        })
    }

    const history = useHistory()

    return (
        <Wrapper>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await login(values)
                    if (response) {
                        history.push('/')
                    } else {
                        setErrors({ username: 'Имя пользователя или пароль введены неверно', password: 'Имя пользователя или пароль введены неверно' })
                    }

                }}
            >
                <Form>
                    <InputField
                        name='username'
                        placeholder='Имя пользователя'
                        label='Имя пользователя'
                    />

                    <Box mt={4}>
                        <InputField
                            name='password'
                            placeholder='Пароль'
                            label='Пароль'
                            type='password'
                        />
                    </Box>
                    <Flex mt={4}>
                        <Button
                            type='submit'
                            variantColor='teal'
                            ml='auto'
                        >
                            Войти
                        </Button>
                    </Flex>
                </Form>
            </Formik>
        </Wrapper>
    )
}