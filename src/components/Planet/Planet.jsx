import { usePlanetContext } from "../../hooks/hooks";

export const Planet = () => {
  const { planetData, planetToDisplay, dataToDisplay } = usePlanetContext();

  const planet = planetData[planetToDisplay].name.toLowerCase();

  return (
    <div className="planet">
      {dataToDisplay === "overview" ? (
        <img src={`./planets/planet-${planet}.svg`} alt={planet} />
      ) : dataToDisplay === "structure" ? (
        <img src={`./planets/planet-${planet}-internal.svg`} alt={planet} />
      ) : (
        <div className="planet-img-wrapper">
          <img
            className="planet-structure"
            src={`./planets/planet-${planet}.svg`}
            alt={planet}
          />{" "}
          <img
            className="planet-geology"
            src={`./planets/planet-${planet}-geology.png`}
            alt={planet}
          />
        </div>
      )}
    </div>
  );
};
