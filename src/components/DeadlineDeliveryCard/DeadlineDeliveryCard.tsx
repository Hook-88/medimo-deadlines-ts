import { useForm } from "react-hook-form"
import Card from "../Card/Card"
import { getTotalTimeStrMinutes, getDayIndexMinutes, getDeadline } from "../../utility/utilityMinutes"
import { useState } from "react";
import copyToClipboard from "../../utility/copyToClipboard";

type formDataType = {
    order_day: string;
    order_time: string;
    delivery_day: string;
}

export default function DeadlineDeliveryCard() {
    const [deadlineDelivery, setDeadlineDelivery] = useState<number | null>(null)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            order_day: "none",
            order_time: "",
            delivery_day: "none"
        }
    })

    function onHandleSubmit(formData: formDataType) {
        if (formData.order_day === "none" || formData.delivery_day === "none") {
            throw new Error("You need to select a day")
        }

        const send = getDayIndexMinutes(formData.order_day) + getTotalTimeStrMinutes(formData.order_time)
        const start = getDayIndexMinutes(formData.delivery_day)

        setDeadlineDelivery(getDeadline(send, start))
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
                    <label htmlFor="order_day"
                        className="text-sm tracking-wide"
                    >
                        Uiterste dag van bestellen:
                    </label>

                    <select
                        id="order_day"
                        className="border rounded-md py-2 px-1" 
                        {...register("order_day", {required: true,}

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
                        htmlFor="order_time"
                        className="text-sm tracking-wide"
                    >
                        Uiterste tijd van bestellen:
                    </label>
                    <input 
                        type="time" 
                        id="order_time" 
                        className="border rounded-md px-2 py-1"
                        {...register("order_time", {required: true})}
                    />
                </Card.Body>

                <Card.Body className="p-4 bg-white shadow-md rounded-sm flex flex-col gap-1">
                    <label htmlFor="delivery_day"
                        className="text-sm tracking-wide"
                    >
                        Leverdag:
                    </label>

                    <select
                        id="delivery_day"
                        className="border rounded-md py-2 px-1" 
                        {...register("delivery_day", {required: true})}
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
                </Card.Body>

                <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm flex gap-2">
                    <button className="px-4 py-1 bg-sky-900 text-white rounded-sm border-2 border-sky-900">
                        Bereken deadline
                    </button>
                    {
                        deadlineDelivery && (
                            <button 
                                className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow"
                                type="button"
                                onClick={() => copyToClipboard(deadlineDelivery)}
                            >
                                {deadlineDelivery}
                            </button>
                        )
                    }
                </Card.Footer> 
                
            </form>        
        </Card>
    )
}