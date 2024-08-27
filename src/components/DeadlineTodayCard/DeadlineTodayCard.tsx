import { useState } from "react"
import Card from "../Card/Card"
import { useForm } from "react-hook-form"

type formDataType = {
    prescription_time: string
}

export default function DeadlineTodayCard() {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            prescription_time: ""
        }
    })
    const [deadlineToday, setDeadlineToday] = useState<number | null>(null)

    function getHourMinutes(timeStr:string) {
        const hour = timeStr.slice(0, 2)

        return Number(hour) * 60
    }

    function getMinutes(timeStr:string) {
        const minutes = timeStr.slice(3)

        return Number(minutes)
    }

    function getDeadlineToday(timeStr:string) {
        const totalMinutesDay = 24 * 60
        const totalMinutes = getHourMinutes(timeStr) + getMinutes(timeStr)

        return totalMinutesDay - totalMinutes
    }

    function onHandleSubmit(data: formDataType) {
        setDeadlineToday(getDeadlineToday(data.prescription_time))      
    }
    
    return (
        <Card className="flex flex-col gap-2 max-w-sm">
            <Card.Header 
                className="
                    py-2 px-4 bg-white shadow-md rounded-sm 
                    flex justify-between text-lg tracking-wide 
                    font-semibold items-center cursor-pointer select-none
                    "
            >
                <h2>Deadline Vandaag</h2>
            </Card.Header>
            <Card.Body className="p-4 bg-white shadow-md rounded-sm">
                <form className="flex flex-col gap-1" onSubmit={handleSubmit(onHandleSubmit)}>
                    <label 
                        htmlFor="deadline_today_time"
                        className="text-sm tracking-wide"
                    >
                        Uiterste tijd van voorschrijven/bestellen:
                    </label>
                    <input 
                        type="time" 
                        id="deadline_today_time" 
                        className="border rounded-md px-2 py-1"
                        {...register("prescription_time", {required: true})}
                    />
                    <button className="hidden">
                        calc
                    </button>
                </form>
            </Card.Body>
            <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm flex gap-2">
                <button className="px-4 py-1 bg-sky-900 text-white rounded-sm border-2 border-sky-900">
                    Bereken deadline
                </button>
                {
                    deadlineToday && (
                        <button className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow">
                            {deadlineToday}
                        </button>
                    )
                }
            </Card.Footer>
        </Card>
    )
}