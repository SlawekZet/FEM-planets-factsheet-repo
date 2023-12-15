import { PlanetDetailElement } from '../PlanetDetailElement/PlanetDetailElement';
import { usePlanetContext } from '../../hooks/hooks';

export const PlanetDetails = () => {
  const { planetData, planetToDisplay } = usePlanetContext();

  return (
    <div className="details-wrapper">
      <PlanetDetailElement data={planetData[planetToDisplay].rotation}>
        rotation time
      </PlanetDetailElement>
      <PlanetDetailElement data={planetData[planetToDisplay].revolution}>
        revolution time
      </PlanetDetailElement>
      <PlanetDetailElement data={planetData[planetToDisplay].radius}>
        radius
      </PlanetDetailElement>
      <PlanetDetailElement data={planetData[planetToDisplay].temperature}>
        average temp.
      </PlanetDetailElement>
    </div>
  );
};
