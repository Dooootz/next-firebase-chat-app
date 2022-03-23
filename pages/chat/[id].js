import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Flex, Avatar, Heading, Input, FormControl, Button, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router' 

const Topbar = () => {
    return (
        <Flex
            bg="gray.100"
            h="81px" w="100%"
            align="center"
            p={5}
        >
            <Avatar src="" marginEnd={3}/>
            <Heading size="lg">user@gmail.com</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return (
        <FormControl
            p={3}
        >
            <Input placeholder='Type a message...' autoComplete="off"/>
            <Button type="submit" hidden>Submit</Button>
        </FormControl>
    )
}

export default function Chat() {
    const router = useRouter();
    const { id } = router.query
    console.log(id)
    
    return (
        <Flex
            h="100vh"
        >
            <Head>
                <title>Chat App</title>
            </Head>

            <Sidebar/>

            <Flex
                flex={1}
                direction="column"
            >
                <Topbar />

                <Flex
                    flex={1}
                    direction="column"
                    pt={4} mx={5}
                    overflowX="scroll"
                    // sx={{scrollbarWidth: "none"}}
                >
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>

                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>



                </Flex>

                <Bottombar />
            </Flex>

        </Flex>
    )
}

