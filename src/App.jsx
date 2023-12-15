import './App.css';
import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { PlanetProvider } from './context/PlanetsContext';

function App() {
  return (
    <PlanetProvider>
      <AppWrapper />
    </PlanetProvider>
  );
}

export default App;
