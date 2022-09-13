import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideNavBar() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink icon={RiContactsLine} href="/users">
                    Usuários
                </NavLink>
            </NavSection>
            <NavSection title="AUTOMAÇÂO">
                <NavLink icon={RiInputMethodLine} href="/forms">
                    Formulário
                </NavLink>
                <NavLink icon={RiContactsLine} href="/automation">
                    Automação
                </NavLink>
            </NavSection>
        </Stack >
    )
}