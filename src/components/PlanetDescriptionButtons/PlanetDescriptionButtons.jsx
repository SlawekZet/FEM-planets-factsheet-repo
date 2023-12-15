import { Button } from "../Button/Button";
import { usePlanetContext } from "../../hooks/hooks";
export const PlanetDescriptionButtons = ({ className }) => {
  const { dataToDisplay, setDataToDisplay } = usePlanetContext();
  const handleClick = (data) => {
    setDataToDisplay(data);
  };

  return (
    <div className={className}>
      <Button
        className={
          dataToDisplay === "overview"
            ? "planet-description-button selected-button"
            : "planet-description-button"
        }
        onclick={() => handleClick("overview")}
      >
        <div className="button-name container">
          <p className="button-number desktop-tablet">01</p>
          <p className="button-name-text">Overview</p>
        </div>
      </Button>
      <Button
        className={
          dataToDisplay === "structure"
            ? "planet-description-button selected-button"
            : "planet-description-button"
        }
        onclick={() => handleClick("structure")}
      >
        <div className="button-name container">
          <p className="button-number desktop-tablet">02</p>
          <p className="button-name-text">
            <span className="desktop-tablet">Internal </span>Structure
          </p>
        </div>
      </Button>
      <Button
        className={
          dataToDisplay === "geology"
            ? "planet-description-button selected-button"
            : "planet-description-button"
        }
        onclick={() => handleClick("geology")}
      >
        <div className="button-name container">
          <p className="button-number desktop-tablet">03</p>
          <p className="button-name-text">
            Surface<span className="desktop-tablet"> Geology</span>
          </p>
        </div>
      </Button>
    </div>
  );
};
