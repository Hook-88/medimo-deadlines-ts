// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from "./components/Card/Card"

export default function App() {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-white shadow-md py-2">
            <h1 className="text-2xl max-w-screen-xl mx-auto">Medimo Deadlines</h1>
        </header>
        <div className="mt-2 flex-grow">
            <main className="max-w-7xl mx-auto">
                <Card className="flex flex-col gap-2">
                    <Card.Header className="py-2 px-4 bg-white shadow-md rounded-sm">
                        <h2>Deadline Vandaag</h2>
                    </Card.Header>
                    <Card.Body className="p-4 bg-white shadow-md rounded-sm">
                        <form>
                            <label htmlFor="deadline_today_time">
                                Uiterste tijd van voorschrijven/bestellen:
                            </label>
                            <input type="time" id="deadline_today_time" />
                        </form>
                    </Card.Body>
                    <Card.Footer className="py-2 px-4 bg-white shadow-md rounded-sm">
                        <button>
                            Bereken deadline
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
