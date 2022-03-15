import NextLink from 'next/link'
import { Flex, Button, IconButton, Heading, Box, HStack, Container, Center, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import "@fontsource/patua-one"
import '@fontsource/fjalla-one'
import "@fontsource/abel"

export const Nav = ({ title }) => {
    const [display, changeDisplay] = useState('none')
    const { data: session, status } = useSession()
    return (
        <Flex>
            <Flex display={['flex', 'flex', 'none', 'none']}>
                <Box>
                <IconButton
                    aria-label='Open Menu'
                    size='lg'
                    icon={<HamburgerIcon />}
                    onClick={() => changeDisplay('flex')}
                />
                    <NextLink href='/' passHref>
                        <Heading
                            fontSize="5vw"
                            fontFamily='Patua One'
                            bg='blackAlpha.600'
                            bgClip="text"
                            pr={7}
                            justifyContent='center'
                         
                            as='button'
                        >
                            {title}
                        </Heading>
                    </NextLink>
                </Box>

            </Flex>

            <Flex
                as='header'
                pos='fixed'
                right='0.5rem'
                left='0.5rem'
                justifyContent='center'
                background='gray.200'
                backdropFilter="saturate(110%) blur(5px)"
                shadow='md'>
                <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <Box>
                        <NextLink href='/' passHref>
                            <Heading
                                fontSize="5vw"
                                fontFamily='Patua One'
                                bg='blackAlpha.600'
                                bgClip="text"
                                pr={7}
                                justifyContent='center'
                                pos='relative'
                                as='button'
                            >
                                {title}
                            </Heading>
                        </NextLink>
                    </Box>
                    <Box pr={4}>
                        <NextLink href='/' passHref>
                            <Button
                                fontSize="2vw"
                                fontFamily='Abel'
                                bg='blackAlpha.300'
                                bgClip="text"
                                my={5}
                                pl={5}
                                pr={5}
                                justifyContent='center'
                                pos='relative'
                                as='button'
                            >
                                HOME
                            </Button>
                        </NextLink>
                    </Box>

                    <Box pr={4}>
                        <NextLink href='/community' passHref>
                            <Button
                                fontSize="2vw"
                                fontFamily='Abel'
                                bg='blackAlpha.300'
                                bgClip="text"
                                my={5}
                                pl={5}
                                pr={5}
                                justifyContent='center'
                                pos='relative'
                                as='button'
                            >
                                COMMUNITY
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>


                {/* <DarkModeSwitch /> */}

                <Box>
                    <Flex
                        display={['none', 'none', 'flex', 'flex']}>
                        {!session && (
                            <>
                                <Box pr={8}>
                                    <NextLink href='/' passHref>
                                        <Button
                                            fontSize="2vw"
                                            fontFamily='Abel'
                                            bg='blackAlpha.300'
                                            bgClip="text"
                                            my={5}
                                            justifyContent='center'
                                            pos='relative'
                                            as='button'
                                            onClick={signIn}
                                        >
                                            SIGN IN
                                        </Button>
                                    </NextLink>
                                </Box>
                            </>
                        )}
                        {session && (
                            <>
                                <Box pr={8}>
                                    <NextLink href='/profile' passHref>
                                        <Button
                                            fontSize="2vw"
                                            fontFamily='Abel'
                                            bg='blackAlpha.300'
                                            bgClip="text"
                                            my={5}
                                            justifyContent='center'
                                            pos='relative'
                                            as='button'
                                        >
                                            PROFILE
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box pl={8}>
                                    <Menu>
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='gray.200' color='blackAlpha.400' my={5}>
                                            {session.user.name}
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>
                                                <NextLink href='/community' passHref>
                                                    <Button
                                                        as='a'
                                                        variant='ghost'
                                                        aria-label='Community'
                                                        w='100%'
                                                        onClick={signOut}>
                                                        Sign Out
                                                    </Button>
                                                </NextLink>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Box>

                            </>
                        )}
                    </Flex>
                </Box>
            </Flex>

            <Flex
                w='100vw'
                bgColor='gray.50'
                zIndex={20}
                h='100vh'
                pos='fixed'
                top='0'
                left='0'
                overflowY='auto'
                flexDir='column'
                display={display}>
                <Flex justify='flex-end'>
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label='Close Menu'
                        size='lg'
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay('none')} />
                </Flex>
                <Flex
                    flexDir='column'
                    align='center'>
                    <NextLink href='/' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Home'
                            my={5}
                            w='100%'>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href='/profile' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Profile'
                            my={5}
                            w='100%'>
                            Profile
                        </Button>
                    </NextLink>
                    <NextLink href='/community' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Community'
                            my={5}
                            w='100%'>
                            Community
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex >
    )
}

Nav.defaultProps = {
    title: 'D  I  V  V  Y',
}