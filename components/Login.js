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

// react functional component
const Login = () => {

    // useSignInWithGoogle(auth) hook - takes our firebase authetication as a parameter 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        // empty fragment
        <>
            {/* ## COMMENTS IN COMPONENTS MUST BE WRAPPED WITH THESE SPECIAL ASTERISK - CURLY BRACES */}
            {/* // change the tab title by creating a Head "tag" component */}
            <Head>
                <title>Login</title>
            </Head>

            {/* // Center components are used to horizontally & vertically center its child */}
            <Center 
                height="100vh"
            >
                {/* // Stack components are similar to flexbox justify & align   */}
                <Stack
                    align="center"
                    // instantiate color followed by a selected 'shade' of that color
                    bgColor="gray.600"
                    // padding is pre-defined to numbers 
                    p={16}
                    // border radius
                    rounded="3xl"
                    // = flexbox: gap
                    spacing={12}
                    // box shadow e.g s, md, lg etc
                    boxShadow="lg"
                >
                    {/* box components is basically a <div> where chakra components may live inside */}
                    {/* e.g chakra-ui icons */}
                    <Box 
                        bgColor="blue.500"
                        // w = width, fit content will shrink the outer component to its child
                        w="fit-content"
                        // padding creates space around the child component
                        p={5}
                        rounded="3xl"
                        boxShadow="md"
                    >
                        <ChatIcon w="100px" h="100px" color="white"/>
                    </Box>

                    {/* simple chakra-ui button takes an onClick attribute */}
                    {/* runs a callback function that executes our useSignInWithGoogle() hook */}
                    {/* hover over the component to see how the parameters effect our hook */}
                    <Button boxShadow="md" onClick={() => signInWithGoogle("", {prompt: "select_account"})}>Sign In with Google</Button>
                </Stack>

            </Center>

        </>

  )

}

// export Login functional component as our default function
export default Login