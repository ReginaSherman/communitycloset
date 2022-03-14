import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import {
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import axios from 'axios'


const NewItemForm = () => {
    const initialState = {name: '', category: '', image: '', size: '', description: ''}
    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
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
        <div>
            <ModalContent padding='5'>
                <ModalHeader>Add an Item</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='name'>Title</FormLabel>
                        <Input
                            id='name'
                            type='text'
                            placeholder='Title'
                            value={formState.name}
                            onChange={handleChange} />
                    </FormControl>
                    {/* <FormLabel htmlFor='image'>Image</FormLabel>
                        <Input
                            id='image'
                            variant='unstyled'
                            type='file'
                            onChange={(e) => setImage(e.target.files[0])} /> */}
                    <FormLabel htmlFor='image'>Image</FormLabel>
                    <Input
                        id='image'
                        type='text'
                        placeholder='image link'
                        value={formState.image}
                        onChange={handleChange} />
                    <FormControl isRequired>
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <Input
                            id='description'
                            type='text'
                            placeholder='Description'
                            value={formState.description}
                            onChange={handleChange} />
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select
                            id='category'
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
                    <ModalFooter>
                        {/* <Button colorScheme='blue' mr={3} onClick='submit'>
                        Submit
                    </Button> */}
                        <input type='submit' />
                    </ModalFooter>
                </form>
            </ModalContent>
        </div>
    )
}

export default NewItemForm