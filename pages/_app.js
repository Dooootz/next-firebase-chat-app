import { ChakraProvider } from "@chakra-ui/provider"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig'

import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import Chat from"./chat/[id]"

import '../styles/globals.css'
import { Spinner, Center } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return (
    <ChakraProvider>
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    </ChakraProvider>
    )

  }

  if(!user) {
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
