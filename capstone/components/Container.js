import { Flex, useColorMode } from '@chakra-ui/react'
import { Nav } from './Nav'

export const Container = (props) => {
    const { colorMode } = useColorMode()

    // const bgColor = { light: 'gray.50', dark: 'gray.900' }

    const color = { light: 'black', dark: 'white' }
    return (
        <>
            <Nav />
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                // bg={bgColor[colorMode]}
                color={color[colorMode]}
                {...props}
            />
        </>

    )
}