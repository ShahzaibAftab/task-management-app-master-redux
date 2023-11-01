import React from 'react'
import {

    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Button, Text, Box, Checkbox } from '@chakra-ui/react';
import { SmallAddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../redux/slices/taskSlice';
import { useEffect } from 'react';
import { selectTaskById } from './../redux/slices/taskSlice';

const CardBanner = (Prop) => {
    const dispatch = useDispatch()
    // const selector = useSelector()
    const editId = useSelector((state) => selectTaskById(state, Prop.Prop.id));


    const sendEditTask = () => {
        console.log('filtered Data', editId)
    };
    // const displayTask = useSelector((state) => state.Task); // Assuming the state holds your task data
    // console.log('updated', displayTask)
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" display="flex" alignItems="center">
                            <Checkbox colorScheme='green' mr="2" />
                            <b>
                                {Prop.Prop.title}
                            </b>
                        </Box>
                        <Text className='mainDate' style={{ marginRight: '70px' }}>  {Prop.Prop.dueDate}</Text>
                        <Button style={{ height: '20px', marginRight: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} colorScheme='green'>{Prop.Prop.status ? 'Active' : 'Inactive'}</Button>
                        <AccordionIcon color='grey' className='icon' as={SmallAddIcon} />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {Prop.Prop.description}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'grey' }}>
                        <EditIcon className='icon' onClick={sendEditTask} />
                        <span style={{ marginInline: '5px' }} />
                        <DeleteIcon className='icon' />
                    </div>
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default CardBanner
