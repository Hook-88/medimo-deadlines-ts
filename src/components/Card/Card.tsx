import { createContext, type ReactNode } from "react"
import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import useToggle from "../../hooks/useToggle"

type CardProps = {
    children: ReactNode;
    className: string
}

type CardState = {
    open: boolean
}

type CardContextValue = CardState & {
    toggleOpen: () => void
}

const CardContext = createContext<CardContextValue | null>(null)

export default function Card({children, className}: CardProps) {
    const [open, toggleOpen] = useToggle(true)
    
    const ctx: CardContextValue = {
        open: open,
        toggleOpen: toggleOpen
    }
    
    return <CardContext.Provider value={ctx}>
        <article className={className}>
            {children}
        </article>
    </CardContext.Provider> 
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter