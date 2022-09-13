import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerContent, DrawerHeader } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SideBarContext";
import { SideNavBar } from "./SideNavBar";

export default function SideBar() {
    const { isOpen, onClose } = useSidebarDrawer()

    // para crair uma responsividade sobreposta do sidebar tpo draawer
    const isDrawSideBar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawSideBar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>
                            Navegação
                        </DrawerHeader>
                        <DrawerBody>
                            <SideNavBar  />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SideNavBar />
        </Box >

    )
}

