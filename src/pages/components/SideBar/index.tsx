import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export default function SideBar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine}>
                        Dashboard
                    </NavLink>
                    <NavLink icon={RiContactsLine}>
                        Usuários
                    </NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÂO">
                    <NavLink icon={RiInputMethodLine}>
                        Formulário
                    </NavLink>
                    <NavLink icon={RiContactsLine}>
                        Automação
                    </NavLink>
                </NavSection>
            </Stack >
        </Box >

    )
}

