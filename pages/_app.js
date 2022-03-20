import Login from "../components/Login"
import { ChakraProvider } from "@chakra-ui/provider"

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <ChakraProvider>
      <Login/>
    </ChakraProvider>
  )
}

export default MyApp
