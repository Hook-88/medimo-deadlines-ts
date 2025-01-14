// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import DeadlineBaxterCard from "./components/DeadlineBaxterCard/DeadlineBaxterCard"
import DeadlineDeliveryCard from "./components/DeadlineDeliveryCard/DeadlineDeliveryCard"
import DeadlineTodayCard from "./components/DeadlineTodayCard/DeadlineTodayCard"

export default function App() {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-white shadow-md py-2 select-none">
            <h1 className="text-2xl max-w-screen-xl mx-auto tracking-wide">Medimo Deadlines</h1>
        </header>
        <div className="mt-2 flex-grow">
            <main className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
                <DeadlineTodayCard />
                <DeadlineBaxterCard />
                <DeadlineDeliveryCard />
            </main>
        </div>
        <footer className="py-2 text-center">
            &copy; Hook88 2024
        </footer>
      </div>
    )
  }
