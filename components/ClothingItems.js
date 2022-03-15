import { Spinner, SimpleGrid, Container, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'


import ClothingItemCard from './ClothingItemCard'

const ClothingItems = () => {
    const itemQuery = useQuery('items', async () => {
        const res = await fetch('/api/clothing-items')
        const data = await res.json()
        return data.clothingItems
    })
    if (itemQuery.isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Flex >
                <SimpleGrid columns={[1, null, 4]} spacing={[null, null, '40px']}>
                    {itemQuery.data.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link href={`/item-detail/${item.id}`}><ClothingItemCard item={item} /></Link>
                            </div>
                        )
                    })}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default ClothingItems