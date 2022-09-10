import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
//hooks of chackra for  validations of responsivity
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
      p={0}

    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
