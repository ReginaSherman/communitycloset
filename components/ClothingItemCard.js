import React from 'react'
import { Img, Box, SimpleGrid, Container } from '@chakra-ui/react'

const ClothingItemCard = ({ item }) => {
    return (
        <div key={item.id} >
            <Box align='center' w='xxs' h='xxs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Img
                    src={item.image}
                    alt={`Picture of ${item.name}`}
                    rounded="lg" />
            </Box>
        </div>
    )
}

export default ClothingItemCard