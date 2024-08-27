import { useForm } from "react-hook-form"
import Card from "../Card/Card"

type formDataType = {
    send_baxter_time: string;
    send_baxter_day: string;
    start_baxter_day: string;
    start_baxter_time: string;
}

export default function DeadlineBaxterCard() {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            send_baxter_time: "",
            send_baxter_day: "none",
            start_baxter_day: "none",
            start_baxter_time: ""
        }
    })

    function onHandleSubmit(formData: formDataType) {
        console.log(formData)
    }
    
    return (
        <Card className="flex flex-col gap-2 w-1/3">
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
                        {...register("send_baxter_day", {required: true})}
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
                    {/* {
                        deadlineToday && (
                            <button 
                                className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow"
                                type="button"
                                onClick={() => copyToClipboard(deadlineToday)}
                            >
                                {deadlineToday}
                            </button>
                        )
                    } */}
                </Card.Footer> 
                
                </form>


            {/* <form className="flex flex-col gap-2" 
                onSubmit={handleSubmit(onHandleSubmit)}
            >
                <Card.Body className="p-4 bg-white shadow-md rounded-sm flex flex-col gap-1">
                    <label htmlFor="send_baxter_day"
                        className="text-sm tracking-wide"
                    >
                        Dag sturen baxter:
                    </label>
                    <select 
                        id="send_baxter_day"
                        className="border rounded-md py-2 px-1"
                        {...register("send_baxter_day_index")}
                    >
                        <option value={0}>Maandag</option>
                        <option value="1">Dinsdag</option>
                        <option value={3}>Woensdag</option>
                        <option value={4}>Donderdag</option>
                        <option value={5}>Vrijdag</option>
                        <option value={5}>Zaterdag</option>
                        <option value={6}>Zondag</option>
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
                    <label htmlFor="send_baxter_day"
                        className="text-sm tracking-wide"
                    >
                        Startdag Baxter:
                    </label>
                    <select 
                        id="send_baxter_day"
                        className="border rounded-md py-2 px-1"
                        {...register("send_baxter_day_index")}
                    >
                        <option value={0}>Maandag</option>
                        <option value={0}>Dinsdag</option>
                        <option value={0}>Woensdag</option>
                        <option value={0}>Donderdag</option>
                        <option value={0}>Vrijdag</option>
                        <option value={0}>Zaterdag</option>
                        <option value={0}>Zondag</option>
                    </select>

                    <label 
                        htmlFor="deadline_today_time"
                        className="text-sm tracking-wide"
                    >
                        Starttijd Baxter:
                    </label>
                    <input 
                        type="time" 
                        id="deadline_today_time" 
                        className="border rounded-md px-2 py-1"
                        // {...register("prescription_time", {required: true})}
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
            </form> */}

            
        </Card>
    )
}