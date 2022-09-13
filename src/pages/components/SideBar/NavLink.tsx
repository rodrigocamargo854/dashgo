import { Icon, Link as ChackraLink,Text, LinkProps as ChakraProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'

interface NavLinkProps extends ChakraProps {
    icon: ElementType;
    children: string
    href: string
}
export function NavLink({icon,href,children,...rest}:NavLinkProps) {
    return (
        <Link href={href} passHref>
        <ChackraLink display="flex" alignItems='center' {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChackraLink>
        </Link>
    );
}