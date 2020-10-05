import React from 'react'
import { Box } from '@chakra-ui/core'

export const Wrapper: React.FC = ({ children }) => {
    return (
        <Box
            mt={8}
            mx='auto'
            maxW='400px'
            w='100%'
        >
            {children}
        </Box>
    )
}