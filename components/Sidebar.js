import React from 'react'
import { Flex, IconButton, Text, Avatar, Button } from '@chakra-ui/react' 
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseconfig'

const Chat = () => {
    return (
        <Flex p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}>
            <Avatar src="" marginEnd={3}/>
            <Text>user@gmailcom</Text>
        </Flex>
    )
}

const Sidebar = () => {
  return (
    <Flex
        // bg="blue.100"
        w="300px" h="100vh"
        borderEnd="1px solid" borderColor="grey.200"
        direction="column"
    >
        <Flex
            // bgColor="red.100"
            h="81px" w="100%"
            align="center" justifyContent="space-between"
            borderBottom="1px solid" borderColor="grey.200"
            p={3}
        >
            <Flex align="center">
                <Avatar src="" marginEnd={3}/>
                <Text>Tre Molony</Text>
            </Flex>

            <IconButton onClick={() => signOut(auth)} size="sm" isRound icon={<ArrowLeftIcon/>} />

        </Flex>

        <Button m={5} p={4} >New Chat</Button>

        <Flex overflowX="scroll" direction="column" flex={1}>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </Flex>

    </Flex>
  )
}

export default Sidebar