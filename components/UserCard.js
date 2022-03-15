import { Img, Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const UserCard = ({ user }) => {
    return (
        <div key={user.id}>
            <Link href={`/user-detail/${user.id}`} passHref>
                <Box align='center' padding='4' bg='gray.100' w='200px' h='xxs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Img
                        borderRadius='full'
                        boxSize='100px'
                        src={user.image}
                        alt='profile'
                    />
                    <br/>
                    <Text>{user.name}</Text>
                </Box>
            </Link>
        </div>
    )
}

export default UserCard