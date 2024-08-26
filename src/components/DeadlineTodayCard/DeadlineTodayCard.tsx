import Card from "../Card/Card"

export default function DeadlineTodayCard() {
    
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
                <form className="flex flex-col gap-1">
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
                    />
                    <button className="hidden">
                        calc
                    </button>
                </form>
            </Card.Body>
            <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm flex gap-2">
                <button className="px-4 py-1 bg-sky-900 text-white rounded-sm">
                    Bereken deadline
                </button>
                <button className="px-4 py-1 border-2 border-sky-900 rounded-sm flex-grow">
                    480
                </button>
            </Card.Footer>
        </Card>
    )
}