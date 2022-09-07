import { Box, Flex, Button,Heading, Icon } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../components/Form/Header";
import SideBar from "../components/Form/SideBar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <SideBar />
                <Box flex='1' borderRadius='8' bg='gray.800' p='8'>
                    <Flex mb='8' justify="space-between" align='center'>
                        <Heading size="lg" fontWeight='normal'>Usuários</Heading>
                        <Button
                            as="a"
                            size="small"
                            fontSize="small"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}>
                            Criar Novo Usuário
                        </Button>
                    </Flex>
                </Box>
            </Flex >
        </Box >
    )
}