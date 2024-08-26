import { type ReactNode } from "react"
import { useCardContext } from "./Card";

type CardBodyProps = {
    children: ReactNode;
    className: string
}

export default function CardBody({children, className}: CardBodyProps) {
    const { open } = useCardContext()
    
    return open ? <section className={className}>
        {children}
    </section> : null
}