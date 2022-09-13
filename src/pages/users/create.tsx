import {
    Box,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
    Button

} from "@chakra-ui/react";
import { Header } from "../components/Header/index";
import { Input } from "../components/Form/Input";
import SideBar from "../components/SideBar";
import Link from "next/link";

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <SideBar />
                <Box flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="248px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="nome completo"></Input>
                            <Input name="email" type="email" label="E-mail"></Input>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="248px" spacing={["6", "8"]} w="100%">
                            <Input name="password" label="password"></Input>
                            <Input name="password_confirmation" type=" password" label="confirmação da senha"></Input>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end' >
                        <HStack spacing='4'>
                            <Link href ='/users' >
                                <Button as='a' colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button colorScheme="pink">
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
