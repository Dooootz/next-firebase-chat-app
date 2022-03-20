import React from 'react'
import { Flex, IconButton, Text, Avatar } from '@chakra-ui/react' 
import { ArrowLeftIcon } from '@chakra-ui/icons'

const Sidebar = () => {
  return (
    <Flex
        bg="blue.100"
        w="300px" h="100vh"
        borderEnd="1px solid" borderColor="grey.200"
    >
        <Flex
            bgColor="red.100"
            h="81px" w="100%"
            align="center" justifyContent="space-between"
            p={3}
        >
            <Avatar src="" />
            <Text>Tre Molony</Text>
            <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} />
        </Flex>

    </Flex>
  )
}

export default Sidebar