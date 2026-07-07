import './App.css'
import ScorecardTable from './components/ScorecardTable'

function App() {
  return (
    <>
      <header>
        <h1>FH6 Top Gear Special Scorecard</h1>
      </header>
      <main>
        <ScorecardTable numberOfPlayers={2} />
      </main>
    </>
  )
}

export default App
