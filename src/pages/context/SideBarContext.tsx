import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";
import React from 'react'

type SidebarDrawerContexData = UseDisclosureReturn
interface SideBarProviderProps {
    children: ReactNode
}

const SideBarDrawerContext = createContext({} as SidebarDrawerContexData)

export function SideBarDrawerProvider({ children }: SideBarProviderProps) {
    const disclosure = useDisclosure()
    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}


export const useSidebarDrawer = () => useContext(SideBarDrawerContext)