import { useForm } from "react-hook-form"
import Card from "../Card/Card"
import { getTimeStrHourMinutes, getTimeStrMinutes } from "../../utility/utilityMinutes"
import { useState } from "react"
import copyToClipboard from "../../utility/copyToClipboard"

type formDataType = {
    send_baxter_time: string;
    send_baxter_day: string;
    start_baxter_day: string;
    start_baxter_time: string;
}

type deadlineObjType = {
    send_baxter_time: number;
    send_baxter_day: number;
    start_baxter_day: number;
    start_baxter_time: number;
}

export default function DeadlineBaxterCard() {
    const [deadlineBaxter, setDeadlineBaxter] = useState<number | null>(null)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            send_baxter_time: "",
            send_baxter_day: "none",
            start_baxter_day: "none",
            start_baxter_time: "00:00"
        }
    })

    function onHandleSubmit(formData: formDataType) {
        if (formData.send_baxter_day === "none" || formData.start_baxter_day === "none") {
            throw new Error("You need to select a day")
        }

        const obj: deadlineObjType = {
            send_baxter_day: getDayIndexMinutes(formData.send_baxter_day),
            send_baxter_time: getTotalTimeStrMinutes(formData.send_baxter_time),
            start_baxter_day: getDayIndexMinutes(formData.start_baxter_day),
            start_baxter_time: getTotalTimeStrMinutes(formData.start_baxter_time)
        }

        setDeadlineBaxter(getDeadlineBaxter(obj))
    }

    function getDayIndexMinutes(dayIndex:string) {
        const index = Number(dayIndex)

        return index * 24 * 60
    }

    function getTotalTimeStrMinutes(timeStr:string) {
        const hours = getTimeStrHourMinutes(timeStr)
        const minutes = getTimeStrMinutes(timeStr)

        return hours + minutes
    }

    function getDeadlineBaxter(deadlineObj: deadlineObjType) {
        const send = deadlineObj.send_baxter_day + deadlineObj.send_baxter_time
        const start = deadlineObj.start_baxter_day + deadlineObj.start_baxter_time

        if (send > start) {
            
            return start - send + (7 * 24 * 60)
        }

        return start - send
    }
    
    return (
        <Card className="flex flex-col gap-2 flex-grow">
            <Card.Header 
                className="
                    py-2 px-4 bg-white shadow-md rounded-sm 
                    flex justify-between text-lg tracking-wide 
                    font-semibold items-center cursor-pointer select-none
                    "
            >
                <h2>Deadline Weekdoos</h2>
            </Card.Header>
            <form 
                onSubmit={handleSubmit(onHandleSubmit)}
                className="flex flex-col gap-2"
            >
                <Card.Body className="p-4 bg-white shadow-md rounded-sm flex flex-col gap-1">
                    <label htmlFor="send_baxter_day"
                        className="text-sm tracking-wide"
                    >
                        Dag van sturen Baxter:
                    </label>

                    <select
                        id="send_baxter_day"
                        className="border rounded-md py-2 px-1" 
                        {
                            ...register(
                                "send_baxter_day", 
                                {
                                    required: true,
                                }

                            )
                        }
                    >
                        <option disabled value="none">--Kies een dag--</option>
                        <option value="0">Maandag</option>
                        <option value="1">Dinsdag</option>
                        <option value="2">Woensdag</option>
                        <option value="3">Donderdag</option>
                        <option value="4">Vrijdag</option>
                        <option value="5">Zaterdag</option>
                        <option value="6">Zondag</option>
                    </select>

                    <label 
                        htmlFor="deadline_today_time"
                        className="text-sm tracking-wide"
                    >
                        Tijd van sturen:
                    </label>
                    <input 
                        type="time" 
                        id="send_baxter_time" 
                        className="border rounded-md px-2 py-1"
                        {...register("send_baxter_time", {required: true})}
                    />
                </Card.Body>

                <Card.Body className="p-4 bg-white shadow-md rounded-sm flex flex-col gap-1">
                    <label htmlFor="start_baxter_day"
                        className="text-sm tracking-wide"
                    >
                        Startdag Baxter:
                    </label>

                    <select
                        id="start_baxter_day"
                        className="border rounded-md py-2 px-1" 
                        {...register("start_baxter_day", {required: true})}
                    >
                        <option disabled value="none">--Kies een dag--</option>
                        <option value="0">Maandag</option>
                        <option value="1">Dinsdag</option>
                        <option value="2">Woensdag</option>
                        <option value="3">Donderdag</option>
                        <option value="4">Vrijdag</option>
                        <option value="5">Zaterdag</option>
                        <option value="6">Zondag</option>
                    </select>

                    <label 
                        htmlFor="start_baxter_time"
                        className="text-sm tracking-wide"
                    >
                        Starttijd Baxter:
                    </label>
                    <input 
                        type="time" 
                        id="start_baxter_time" 
                        className="border rounded-md px-2 py-1"
                        {...register("start_baxter_time", {required: true})}
                    />
                </Card.Body>

                <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm flex gap-2">
                    <button className="px-4 py-1 bg-sky-900 text-white rounded-sm border-2 border-sky-900">
                        Bereken deadline
                    </button>
                    {
                        deadlineBaxter && (
                            <button 
                                className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow"
                                type="button"
                                onClick={() => copyToClipboard(deadlineBaxter)}
                            >
                                {deadlineBaxter}
                            </button>
                        )
                    }
                </Card.Footer> 
                
            </form>        
        </Card>
    )
}