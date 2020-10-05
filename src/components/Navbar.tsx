import { Box, Flex, Heading, Link } from '@chakra-ui/core'
import React from 'react'

const NavbarItem = (props: any) => {
    return (
        <Link ml={6} href={props.to}>
            {props.children}
        </Link>
    )
}

export const Navbar: React.FC<{}> = () => {
    return (
        <Flex
            as='nav'
            position='sticky'
            top={0}
            zIndex={1}
            align='center'
            justify='space-between'
            wrap='wrap'
            padding='1.5rem'
            bg='teal.500'
            color='white'
        >
            <Flex align='center'>
                <Heading
                    as='h1' size='lg'
                >
                    <Link href='/' >
                        Bamazon
                    </Link>
                </Heading>
            </Flex>

            <Box
                display='flex'
            >
                <NavbarItem to='/books'>Books</NavbarItem>
                <NavbarItem to='/profile'>Profile</NavbarItem>
            </Box>
        </Flex>
    )
}