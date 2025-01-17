import { useState } from "react"
import Card from "../Card/Card"
import { useForm } from "react-hook-form"
import { getTimeStrMinutes, getTimeStrHourMinutes } from "../../utility/utilityMinutes"
import copyToClipboard from "../../utility/copyToClipboard"

type formDataType = {
    prescription_time: string
}

export default function DeadlineTodayCard() {
    const [deadlineToday, setDeadlineToday] = useState<number | null>(null)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            prescription_time: ""
        }
    })

    function getDeadlineToday(timeStr:string) {
        const totalMinutesDay = 24 * 60
        const totalMinutes = getTimeStrHourMinutes(timeStr) + getTimeStrMinutes(timeStr)

        return totalMinutesDay - totalMinutes
    }

    function onHandleSubmit(data: formDataType) {
        setDeadlineToday(getDeadlineToday(data.prescription_time))      
    }
    
    return (
        <Card className="flex flex-col gap-2">
            <Card.Header 
                className="
                    py-2 px-4 bg-white shadow-md rounded-sm 
                    flex justify-between text-lg tracking-wide 
                    font-semibold items-center cursor-pointer select-none
                    "
            >
                <h2>Deadline Vandaag</h2>
            </Card.Header>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onHandleSubmit)}>
                <Card.Body className="p-4 bg-white shadow-md rounded-sm flex flex-col gap-1">
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
                </Card.Body>
                <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm flex gap-2">
                    <button className="px-4 py-1 bg-sky-900 text-white rounded-sm border-2 border-sky-900">
                        Bereken deadline
                    </button>
                    {
                        deadlineToday && (
                            <button 
                                className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow"
                                type="button"
                                onClick={() => copyToClipboard(deadlineToday)}
                            >
                                {deadlineToday}
                            </button>
                        )
                    }
                </Card.Footer>        
            </form>

            
        </Card>
    )
}