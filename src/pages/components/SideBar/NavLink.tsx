import { Icon, Link,Text, LinkProps as ChakraProps } from "@chakra-ui/react";
import { ElementType } from "react";


interface NavLinkProps extends ChakraProps {
    icon: ElementType;
    children: string
}
export function NavLink({icon,children,...rest}:NavLinkProps) {
    return (
        <Link display="flex" alignItems='center' {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}