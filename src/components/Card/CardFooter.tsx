import { type ReactNode } from "react"
import { useCardContext } from "./Card";

type CardFooterProps = {
    children: ReactNode;
    className: string
}

export default function CardFooter({children, className}: CardFooterProps) {
    const { open } = useCardContext()

    return open ? <footer className={className}>
        {children}
    </footer> : null
}