import { type ReactNode } from "react"
import { useCardContext } from "./Card";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type CardHeaderProps = {
    children: ReactNode;
    className: string
}

export default function CardHeader({children, className}: CardHeaderProps) {
    const { toggleOpen, open } = useCardContext()

    return <header className={className} onClick={toggleOpen}>
        {children}
        {open ? <FaAngleUp /> : <FaAngleDown />}
    </header>
}