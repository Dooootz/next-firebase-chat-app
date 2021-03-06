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

    // single line callback function takes autheticated email as a parameter
    // opens the chat document then loops thru to match user email with our auth email
    const chatExists = email => chats?.find(chat => (chat.users.includes(user.email) && chat.users.includes(email)))

    // asynchronous callback function 
    // prompts user to enter the email of intended chat user
    const newChat = async () => {
        const input = prompt("Enter email of chat recipient");
        // if chat with selected user does NOT exist
        // await
        // then create new chat with that user 
        // if chat does exist... then do nothing
        if(!chatExists(input) && (input != user.email)) {
            await addDoc(collection((getFirestore(db)), "chats"), { users: [user.email, input]} );
        }
    }

    // filter thru all the distinct chats in firestore 
    const chatList = () => {
        return (
            // match & validate the emails between both parties
        chats?.filter(chat => chat.users.includes(user.email))
            .map(
            // upon matching, add this new element to the DOM
            chat =>
                // onclick function that redirects user the shared chat session
                <Flex key={Math.random()} p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}} onClick={() => redirect(chat.id)}>
                    <Avatar src="" marginEnd={3}/>
                    {/* match & display that users email address */}
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

                {/* // onclick function calls the google firebase signout function */}
                {/* takes authenticated user as a parameter */}
                <IconButton onClick={() => signOut(auth)} size="sm" isRound icon={<ArrowLeftIcon/>} />

            </Flex>

            {/* // onclick function executes newChat function // no parameters */}
            <Button m={5} p={4} onClick={() =>newChat()} >New Chat</Button>

            {/* display our chat list inside this flex component */}
            <Flex overflowX="scroll" direction="column" flex={1}>
            {chatList()}
            </Flex>

        </Flex>
    )
}

export default Sidebar