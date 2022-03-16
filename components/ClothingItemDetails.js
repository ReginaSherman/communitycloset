import { Spinner, Button, Box, Img, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { Container } from './Container'

const ClothingItemDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const query = useQuery('item', async () => {
        const res = await fetch(`http://localhost:3000/api/clothing-item/${id}`)
        console.log('res', res)
        const data = await res.json()
        console.log('data', data)
        return data.clothingItem
    }, {
        enabled: !!id,
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Container height="100vh" padding='150'>
                <Box>
                    <NextLink href='/' passHref>
                        <Button
                            as='a'
                            aria-label='Back'
                            position='relative'
                        >
                            Go Back
                        </Button>
                    </NextLink>
                </Box>

                <div key={query.data?.id} >
                    <Flex p={50} w="full" alignItems="center" justifyContent="center">
                        <Box
                            bg='gray.100'
                            maxW="sm"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            >

                            <Image
                                src={query.data?.image}
                                alt={`Picture of ${query.data?.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">
                                <Box d="flex" alignItems="baseline">

                                </Box>
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="2xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated>
                                        {query.data?.name}
                                    </Box>
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated>
                                        {query.data?.size}
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </div>
            </Container>
        </>
    )
}

export default ClothingItemDetail


{/* 
<Box align='center' w='xxs' h='xxs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Img
                            src={query.data?.image}
                            alt={`Picture of ${query.data?.name}`}
                            rounded="lg" />
                    </Box>
                </div> */}
{/* This is item {query.data?.name} */ }