import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    shouldMatchExactref?: boolean
}

export function ActiveLink({
    shouldMatchExactref = false,
    children, ...rest }: ActiveLinkProps
) {
    const { asPath } = useRouter()

    let isActive = false


    if (shouldMatchExactref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true
    }

    if (!shouldMatchExactref &&
        (asPath.startsWith(String(rest.href)) ||
            asPath.startsWith(String(rest.as)))) {
        isActive = true
    }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.400'
            })}
        </Link>

    )
}