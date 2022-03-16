import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { FormControl, FormLabel, Input, Select, Flex, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useS3Upload } from 'next-s3-upload';

const NewItemForm = () => {
    const initialState = { name: '', category: '', image: '', size: '', description: '' }
    const [formState, setFormState] = useState(initialState)
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    };

    let handleFileChange = async file => {
        let { url } = await uploadToS3(file);
        setFormState({...formState, image: url});
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('/api/clothing-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.name,
                    category: formState.category,
                    image: formState.image,
                    size: formState.size,
                    description: formState.descripton
                })
            })
        } catch (e) {
            console.error(e)
        }
        setFormState(initialState)
    }

    return (
        <Flex bg='gray.200' width='700px' margin='5' justifyContent='center' borderRadius='lg'>
                <form onSubmit={handleSubmit} >
                    <FormControl isRequired>
                        <FormLabel mt={5} htmlFor='name'>Title</FormLabel>
                        <Input
                            id='name'
                            type='text'
                            placeholder='Title'
                            w='500px'
                            bg='white'
                            value={formState.name}
                            onChange={handleChange} />
                    </FormControl>
                    <FormLabel htmlFor='image'>Image</FormLabel>
                    <Button onClick={openFileDialog}>Upload File</Button>
                    <FileInput
                        id='image'
                        type='text'
                        onChange={handleFileChange} />
                    <FormControl isRequired>
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <Input
                            id='description'
                            type='text'
                            bg='white'
                            // width='500px'
                            placeholder='Description'
                            value={formState.description}
                            onChange={handleChange} />
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select
                            id='category'
                            bg='white'
                            placeholder='Category'
                            value={formState.category}
                            onChange={handleChange}>
                            <option>Top</option>
                            <option>Bottom</option>
                            <option>Dress</option>
                            <option>Shoes</option>
                            <option>Sweater</option>
                            <option>Jacket</option>
                            <option>Misc</option>
                        </Select>
                        <FormLabel htmlFor='size'>Size</FormLabel>
                        <Select
                            id='size'
                            placeholder='Size'
                            bg='white'
                            value={formState.size}
                            onChange={handleChange}>
                            <option>XXS</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </Select>
                    </FormControl>
                        <Button type='submit' colorScheme='gray' mr={3} mt={5} mb={5}>
                            Submit
                        </Button>
                </form>
        </Flex>
    )
}

export default NewItemForm