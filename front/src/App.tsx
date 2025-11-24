import { week0 } from './lib/week0'
import { WeekView } from './components/WeekView'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Training Plan</h1>
        <WeekView days={week0} />
      </div>
    </div>
  )
}

export default App
