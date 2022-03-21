import { ChakraProvider } from "@chakra-ui/provider"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import Chat from"./chat/[id]"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
