// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FaAngleUp } from "react-icons/fa6"
import Card from "./components/Card/Card"

export default function App() {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-white shadow-md py-2">
            <h1 className="text-2xl max-w-screen-xl mx-auto tracking-wide">Medimo Deadlines</h1>
        </header>
        <div className="mt-2 flex-grow">
            <main className="max-w-7xl mx-auto">
                <Card className="flex flex-col gap-2 max-w-sm">
                    <Card.Header className="py-2 px-4 bg-white shadow-md rounded-sm flex justify-between text-lg tracking-wide">
                        <h2>Deadline Vandaag</h2>
                        <button className="pl-2">
                            <FaAngleUp />
                        </button>
                    </Card.Header>
                    <Card.Body className="p-4 bg-white shadow-md rounded-sm">
                        <form className="flex flex-col gap-1">
                            <label 
                                htmlFor="deadline_today_time"
                                className="text-sm tracking-wide font-semibold"
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
            </main>
        </div>
        <footer className="py-2 text-center">
            &copy; Hook88 2024
        </footer>
      </div>
    )
  }
