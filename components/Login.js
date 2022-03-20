import React from 'react'
import Head from 'next/head'
import { ChatIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Stack } from "@chakra-ui/react"


const Login = () => {
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
                bgColor="grey"
                p={16}
                rounded="3xl"
            >
                <Box 
                    bgColor="blue"
                    w="fit-content"
                    p={5}
                    rounded="3xl"
                    boxShadow="md"
                >
                    <ChatIcon w="100px" h="100px" color="white"/>
                </Box>

                <Button boxShadow="md">Sign In with Google</Button>
            </Stack>

        </Center>

    </>

  )

}


export default Login