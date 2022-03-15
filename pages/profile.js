import { Modal, ModalOverlay } from '@chakra-ui/react'
import { useDisclosure, Button, Flex, SimpleGrid, Link, Spinner } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import NewItemForm from '../components/NewItemForm'
import ClothingItemCard from '../components/ClothingItemCard'

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const query = useQuery('user', async () => {
    const id = router.query.id
    const res = await fetch(`http://localhost:3000/api/user/${id}`)
    const data = await res.json()
    const session = await getSession()
    console.log(session.user)
    // console.log('data', data)
    // return data.user
  })
  console.log(query)
  if (query.isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Container height="100vh" padding='150'>
        <Button onClick={onOpen}>Add an Item</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <NewItemForm />
        </Modal>
        {/* <Flex >
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
        </Flex> */}
      </Container>

    </>
  )
}

