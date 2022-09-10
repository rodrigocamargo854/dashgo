import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";


type SidebarDrawerContexData = UseDisclosureReturn

interface SideBarProviderProps {
    children: ReactNode
}

const SideBarDrawerContext = createContext({} as SidebarDrawerContexData )
const disclosure = useDisclosure()

export function SideBarDrawerProvider({ children }: SideBarProviderProps) {
    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )


}