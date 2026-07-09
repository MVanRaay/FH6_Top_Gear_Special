import './App.css'
import ScorecardTable from './components/ScorecardTable'
import eventsData from '../src/data/Events.json';

function App() {

  const numberOfPlayers = 2;

  return (
    <>
      <header>
        <h1>Forza Horizon 6 Top Gear Special Scorecard</h1>
      </header>
      <main>
        <ScorecardTable numberOfPlayers={numberOfPlayers} events={eventsData} />
      </main>
    </>
  )
}

export default App
