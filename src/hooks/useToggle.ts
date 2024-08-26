import { useState } from "react"

export default function useToggle(initialValue: boolean = false) : [boolean , () => void] {
    const [on, setOn] = useState<boolean>(initialValue)

    function toggleOn() {
        setOn(prevOn => !prevOn)
    }

    return [on, toggleOn]
}