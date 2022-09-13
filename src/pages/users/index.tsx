import {
    Box,
    Flex,
    Button,
    Heading,
    Icon,
    Table,
    Tr,
    Th,
    Checkbox,
    Thead,
    Tbody,
    Td,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../components/Header/index";
import { Pagination } from "../components/Pagination";
import SideBar from "../components/SideBar";
import Link from 'next/link';
export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <SideBar />
                <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>
                        <Link href='/users/create' passHref>
                            <Button
                                as="a"
                                size="small"
                                fontSize="small"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar Novo Usuário
                            </Button>

                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuários</Th>
                                {isWideVersion && <Th>Data de cadastros</Th>}
                                <Th width="0"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td px={["4", "4", "6"]}>
                                    <Box>
                                        <Text fontWeight="bold">Rodrigo Camargo</Text>
                                        <Text fontSize="sm" color="gray.300"  >rodrigocamargo854@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>04 de abril, 2021</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="small"
                                        fontSize="small"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilFill} />}
                                    >
                                        Criar Novo Usuário
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}
