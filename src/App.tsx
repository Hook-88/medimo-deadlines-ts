// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App() {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-white shadow-md py-2">
            <h1 className="text-2xl max-w-screen-xl mx-auto">Medimo Deadlines</h1>
        </header>
        <div className="mt-2 flex-grow">
            <main className="max-w-7xl mx-auto">
                <article>
                    <header>
                        <h2>Deadline Vandaag</h2>
                    </header>
                    <section>
                        <form>
                            <label htmlFor="deadline_today_time">
                                Uiterste tijd van voorschrijven/bestellen:
                            </label>
                            <input type="time" id="deadline_today_time" />
                        </form>
                    </section>
                    <footer>
                        <button>
                            Bereken deadline
                        </button>
                    </footer>
                </article>
            </main>
        </div>
        <footer className="py-2 text-center">
            &copy; Hook88 2024
        </footer>
      </div>
    )
  }
