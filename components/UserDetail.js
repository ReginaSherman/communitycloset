import React from 'react'
import { Spinner, Box, Img, Text, Flex, SimpleGrid, Link } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import ClothingItemCard from './ClothingItemCard'
import { Container } from './Container'


const UserDetail = () => {
    const router = useRouter()
    const query = useQuery('user', async () => {
        const id = router.query.id
        const res = await fetch(`/api/user/${id}`)
        const data = await res.json()
        console.log('data', data)
        return data.user
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    console.log(query)
    return (
        <>
            <Container padding='100'>
                <Box align='center' padding='4' bg='gray.100' w='xs' h='xxs' borderRadius='lg' overflow='hidden'>
                    <Img
                        borderRadius='full'
                        boxSize='75px'
                        src={query.data.image}
                        alt='profile'
                    />
                    <Text fontFamily='Abel' fontWeight='bold' fontSize='x-large'>{`${query.data.name}'s Closet`}</Text>

                </Box>

                <Flex >
                    <SimpleGrid columns={[1, null, 3]} spacing='40px'>
                        {query.data.clothingItems.map(item => {
                            return (
                                <>
                                    <div key={item.id}>
                                        <Link href={`/item-detail/${item.id}`}><ClothingItemCard item={item} /></Link>
                                    </div>
                                </>
                            )
                        })}
                    </SimpleGrid>
                </Flex>
            </Container>
        </>
    )
}

export default UserDetail