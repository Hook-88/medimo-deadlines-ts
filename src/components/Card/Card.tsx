import { type ReactNode } from "react"
import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"


type CardProps = {
    children: ReactNode;
    className: string
}

export default function Card({children, className}: CardProps) {
    
    return <article className={className}>
        {children}
    </article>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter