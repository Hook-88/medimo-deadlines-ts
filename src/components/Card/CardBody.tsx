import { type ReactNode } from "react"

type CardBodyProps = {
    children: ReactNode;
    className: string
}

export default function CardBody({children, className}: CardBodyProps) {
    
    return <section className={className}>
        {children}
    </section>
}