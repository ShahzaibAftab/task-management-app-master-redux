import React, { useEffect, useState } from 'react';
import './Main.css';

import bgVideo from './spaceLoop.gif';
import { Box, Container, Text, Accordion, useDisclosure, Textarea, Card } from '@chakra-ui/react';
import { Button, Menu, MenuButton, MenuList, MenuItem, FormControl, Input, FormLabel, Switch } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';
import CardBanner from './CardBanner';

export const editTask = (e) => {
    console.log('editState', e)
}
const Main = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.manageTask)
    // console.warn('obj', items.manageTask)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const bgImageStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, // Behind other content
    };
    const [modalData, setModalData] = useState(
        {
            id: 0,
            title: '',
            description: '',
            dueDate: '',
            status: false,
        }
    );

    const saveModal = () => {
        const newId = getRandomInt(1, 1000);

        // Create a new object with the unique id
        const newModalItem = {
            id: newId,
            title: modalData.title,
            description: modalData.description,
            dueDate: modalData.dueDate,
            status: modalData.status,
        };

        // Update the state by creating a new array with the new item
        setModalData({ ...modalData, newModalItem });

        console.log('modal', modalData); // This will still log the previous state
        dispatch(addTask({ modalData: newModalItem }));
        console.warn('obj', items[0]);
        setModalData({})
        onClose();
    };

    function getRandomInt(min, max) {
        // Generates a random integer between min (inclusive) and max (exclusive)
        let random = Math.floor(Math.random() * (max - min)) + min;
        console.log('random', random)

        return random
    }
    return (
        <>
            <button onClick={() => console.log('I am current state', items)}>state</button>
            {console.log('managetask', items.manageTask)}
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Task🎶</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input
                                type='text'
                                ref={initialRef}
                                placeholder='Title'
                                value={modalData.title}
                                onChange={(e) =>
                                    setModalData({ ...modalData, title: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <Textarea
                                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                placeholder='Description'
                                value={modalData.description}
                                onChange={(e) =>
                                    setModalData({ ...modalData, description: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel color='grey'> Due Date</FormLabel>
                            <Input
                                type='Date'
                                ref={initialRef}
                                placeholder='Title'
                                value={modalData.dueDate}
                                onChange={(e) =>
                                    setModalData({ ...modalData, dueDate: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel color='grey'> Status Active/Disable</FormLabel>
                            <Switch
                                colorScheme='teal'
                                size='lg'
                                isChecked={modalData.status}
                                onChange={(e) =>
                                    setModalData({ ...modalData, status: e.target.checked })
                                }
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={saveModal} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <div>
                <img src={bgVideo} alt="Background GIF" style={bgImageStyle} />
                <div className='mainContent'>
                    <Container style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }} maxW='2xl' height='100px' bg='blue.700'>
                        <Box
                            padding='4'
                            // bg='blue.400'
                            color='white'
                            maxW='100%'
                            style={{ display: "flex", position: "relative" }}
                        >
                            <Text className='mainTitle'
                                style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
                            >
                                Welcome Back, Shahzaib <br /><Text className='mainMiniText' style={{ fontSize: '15px' }}>🔥Todos, Daily Tasks, Reminders 🔥</Text>
                            </Text>
                            <Text
                                fontSize='sm'
                                style={{ position: "absolute", right: 0, top: "100%", transform: "translateY(-10%)" }}
                            >
                                <Menu>
                                    <MenuButton as={Button} color='white' colorScheme='' rightIcon={<ChevronDownIcon fontSize='2xl' />}>

                                    </MenuButton>
                                    <MenuList color='black'>
                                        <MenuItem onClick={onOpen}>Add new</MenuItem>
                                        <MenuItem>Profile</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Text>
                        </Box>

                    </Container>
                    <Accordion allowToggle className="mainAccordation">
                        {
                            items.map((obj, index) => (
                                <CardBanner key={index} Prop={obj.modalData} />
                            ))
                        }
                    </Accordion>
                    <Menu>
                        <MenuButton colorScheme='pink' style={{ marginTop: '50px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.2)' }} as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Delete all</MenuItem>
                            <MenuItem>Change Status</MenuItem>
                        </MenuList>
                    </Menu>

                </div>
            </div>
        </>
    );
}

export default Main;
