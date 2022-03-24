// == Login component ==
import React from 'react'

// import Head component from index.js in the root of pages folder
// Exact same as a head tag in a html document 
// When developing with Next.js, Head components must be imported from next.head
import Head from 'next/head'

// import chakra-ui icon library
import { ChatIcon } from '@chakra-ui/icons'

// import styling components from chakra-ui/react
// useful additional info can be found by hovering over each component
import { Box, Button, Center, Stack } from "@chakra-ui/react"

// import react-firebase hooks / functions
// useful info can be found in website & github docs
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

// import the get auth function which is set up in our config file
import { auth } from '../firebaseconfig'


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
        <Head>
            <title>Login</title>
        </Head>

        <Center 
            height="100vh"
        >
            <Stack
                align="center"
                bgColor="gray.600"
                p={16}
                rounded="3xl"
                spacing={12}
                boxShadow="lg"
            >
                <Box 
                    bgColor="blue.500"
                    w="fit-content"
                    p={5}
                    rounded="3xl"
                    boxShadow="md"
                >
                    <ChatIcon w="100px" h="100px" color="white"/>
                </Box>

                <Button boxShadow="md" onClick={() => signInWithGoogle("", {prompt: "select_account"})}>Sign In with Google</Button>
            </Stack>

        </Center>

    </>

  )

}


export default Login