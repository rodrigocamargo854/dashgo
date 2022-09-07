import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";

export default function SideBar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        GERAL
                    </Text>
                    <Stack spacing="1" mt="8" align="stretch">
                        <Link display="flex" alignItems='center' color='pink.400' py='1'>
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>
                    </Stack>
                    <Stack spacing="1" align="flex-start">

                        <Link display="flex" alignItems='center' color='pink.400' py='1'>
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">
                        Automação
                    </Text>
                    <Stack spacing="1" mt="0" align="stretch">
                        <Link display="flex" alignItems='center' color='pink.400' py='1'>
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Formulário</Text>
                        </Link>
                        <Link display="flex" alignItems='center' color='pink.400' py='1'>
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack >
        </Box >

    )
}

