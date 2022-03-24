// == Sidebar component ==
import React from 'react'

// import necessary chakra-ui components 
import { Flex, IconButton, Text, Avatar, Button } from '@chakra-ui/react' 

// import { icon } from chakra-ui library
import { ArrowLeftIcon } from '@chakra-ui/icons'

// import sign out function from firebase/auth
import { getRedirectResult, signOut } from 'firebase/auth'

// import getAuth & getFirestore functions 
import { auth, db } from '../firebaseconfig'

// useState hook for firebase - 
import { useAuthState } from 'react-firebase-hooks/auth';

// useCollection = use firebase database schema
import { useCollection } from 'react-firebase-hooks/firestore';

// import firebase functions
import { getFirestore, collection, addDoc } from '@firebase/firestore'

// import logic from utils/getOtherEmail
// this function captures the authenticated users email
// then filters thru each users email in db & saves the email into an array
import getOtherEmail from '../utils/getOtherEmail'

// import useRouter() functions from next/router
import { useRouter } from 'next/router'


// Sidebar functional component
const Sidebar = () => {

  // destructure user from useAuthState hook
  // takes authentication as a parameter / handle
  const [user] = useAuthState(auth);

  // destructure useCollection hook - see docs for additional information about using this hook + parameters 
  const [snapshot, loading, error] = useCollection(collection(getFirestore(db), "chats"));

  // chats takes a snapshot of the live document 
  // finds the document credentials that match of firebase config file 
  const chats = snapshot?.docs.map((doc => ({id: doc.id, ...doc.data()})));

  // use next router function
  const router = useRouter()  

  // redirect callback function that takes uuid as a parameter 
  const redirect = (id) => {
    // router.push() function takes us to this api endpoint - where uuid === id
    router.push(`/chat/${id}`);
  }

  const chatExists = email => chats?.find(chat => (chat.users.includes(user.email) && chat.users.includes(email)))

  const newChat = async () => {
      const input = prompt("Enter email of chat recipient");
      if(!chatExists(input) && (input != user.email)) {
          await addDoc(collection((getFirestore(db)), "chats"), { users: [user.email, input]} );
      }
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

        <Button m={5} p={4} onClick={() =>newChat()} >New Chat</Button>

        <Flex overflowX="scroll" direction="column" flex={1}>
            {chatList()}
        </Flex>

    </Flex>
  )
}

export default Sidebar