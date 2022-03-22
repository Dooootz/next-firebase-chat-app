import React from 'react'
import { Flex, IconButton, Text, Avatar, Button } from '@chakra-ui/react' 
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { getRedirectResult, signOut } from 'firebase/auth'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from '@firebase/firestore'
import { db } from '../firebaseconfig'
import getOtherEmail from '../utils/getOtherEmail'
import { useRouter } from 'next/router'


const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(getFirestore(db), "chats"));
  const chats = snapshot?.docs.map((doc => ({id: doc.id, ...doc.data()})));
  const router = useRouter()  

  
  const redirect = (id) => {
    router.push(`/chat/${id}`);
  }
  
  const chatList = () => {
    return (
        chats?.filter(chat => chat.users.includes(user.email))
        .map(
            chat =>
            <Flex key={Math.random()} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}} onClick={() => redirect(chat.id)}>
                <Avatar src="" marginEnd={3}/>
                <Text>{getOtherEmail(chat.users, user)}</Text>
            </Flex>
        )
    )
}
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
                <Avatar src={user.photoURL} marginEnd={3}/>
                <Text>{user.displayName}</Text>
            </Flex>

            <IconButton onClick={() => signOut(auth)} size="sm" isRound icon={<ArrowLeftIcon/>} />

        </Flex>

        <Button m={5} p={4} >New Chat</Button>

        <Flex overflowX="scroll" direction="column" flex={1}>
            {chatList()}
        </Flex>

    </Flex>
  )
}

export default Sidebar