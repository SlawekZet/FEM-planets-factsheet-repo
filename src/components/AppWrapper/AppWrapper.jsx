import { usePlanetContext } from "../../hooks/hooks";
import { Navbar } from "../NavBar/NavBar";
import { Planet } from "../Planet/Planet";
import { PlanetDescription } from "../PlanetDescription/PlanetDescription";
import { PlanetDetails } from "../PlanetDetails/PlanetDetails";
export const AppWrapper = () => {
  const { isLoading, error } = usePlanetContext();

  if (isLoading === true) {
    return <p className="loading">Loading...</p>;
  } else if (error) {
    return <p className="error">There was an error: {error}</p>;
  }

  return (
    <main className="main-grid">
      <Navbar />
      <section className="container planet-data">
        <div className="planet-and-description container">
          <Planet />
          <PlanetDescription />
        </div>
      </section>
      <PlanetDetails />
    </main>
  );
};
