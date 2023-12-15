import { PlanetDescriptionButtons } from "../PlanetDescriptionButtons/PlanetDescriptionButtons";
import { usePlanetContext } from "../../hooks/hooks";

export const PlanetDescription = () => {
  const { planetData, planetToDisplay, dataToDisplay } = usePlanetContext();

  const dataDisplay = (dataToDisplay) => {
    if (dataToDisplay === "overview") {
      return planetData[planetToDisplay].overview.content;
    } else if (dataToDisplay === "structure") {
      return planetData[planetToDisplay].structure.content;
    } else {
      return planetData[planetToDisplay].geology.content;
    }
  };

  return (
    <div className="columns planet-description">
      <div className="planet-description-text">
        <h1 className="hero antonio upper-case">
          {planetData[planetToDisplay].name}
        </h1>
        <p className="planet-description-content">
          {dataDisplay(dataToDisplay)}
        </p>
        <p className="planet-description-source">
          Source:{" "}
          <a
            href={
              dataToDisplay === "overview"
                ? planetData[planetToDisplay].overview.source
                : dataToDisplay === "structure"
                ? planetData[planetToDisplay].structure.source
                : planetData[planetToDisplay].geology.source
            }
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
            <img src="./icons/icon-source.svg" alt="" />
          </a>
        </p>
      </div>
      <PlanetDescriptionButtons
        className={"planet-description-buttons desktop-tablet"}
      />
    </div>
  );
};
