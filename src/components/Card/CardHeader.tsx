import { type ReactNode } from "react"

type CardHeaderProps = {
    children: ReactNode;
    className: string
}

export default function CardHeader({children, className}: CardHeaderProps) {
    
    return <header className={className}>
        {children}
    </header>
}