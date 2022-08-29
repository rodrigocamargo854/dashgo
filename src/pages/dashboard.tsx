import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Form/Header";
import SideBar from "./components/Form/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <SideBar/>
      </Flex>
    </Flex>
  );
}
