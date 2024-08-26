import { type ReactNode } from "react"

type CardFooterProps = {
    children: ReactNode;
    className: string
}

export default function CardFooter({children, className}: CardFooterProps) {
    
    return <footer className={className}>
        {children}
    </footer>
}