import { useEffect, useState } from "react";
import { usePlanetContext } from "../../hooks/hooks";
import { Button } from "../Button/Button";
import { PlanetDescriptionButtons } from "../PlanetDescriptionButtons/PlanetDescriptionButtons";

export const Navbar = () => {
  const { planetData, setPlanetToDisplay, setDataToDisplay } =
    usePlanetContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 376);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const planetArray = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const handleClick = (num) => {
    setPlanetToDisplay(num);
    document.documentElement.dataset.theme = planetArray[num];
  };

  const handleMenuClick = () => {
    setTimeout(() => {
      setIsMenuDisplayed(!isMenuDisplayed);
    }, 50);
  };

  const handleMobileClick = (num) => {
    setTimeout(() => {
      setIsMenuDisplayed(!isMenuDisplayed);
      setPlanetToDisplay(num);
      setDataToDisplay("overview");
      document.documentElement.dataset.theme = planetArray[num];
    }, 50);
  };

  return (
    <div className="container navbar">
      <div className="navbar-header-wrapper">
        <h2 className="upper-case header">The Planets</h2>
        <Button
          className={"mobile mobile-menu-button"}
          onclick={handleMenuClick}
        >
          <img src="./icons/icon-hamburger.svg" alt="menu icon" />
        </Button>
      </div>
      <div
        className={
          isMenuDisplayed && isMobile
            ? "container navbar-buttons"
            : "container navbar-buttons hidden"
        }
        style={
          isMobile
            ? {
                maxHeight: isMenuDisplayed ? "600px" : "0",
              }
            : null
        }
      >
        {isMobile
          ? planetData.map((e, index) => (
              <Button
                key={index}
                onclick={() => handleMobileClick(index)}
                index={index}
                className={"mobile-navbar-button upper-case"}
              >
                <div className="mobile-navbar-button-name-wrapper">
                  <div
                    className="navbar-circle"
                    style={{ backgroundColor: `var(--${planetArray[index]})` }}
                  />
                  <p>{e.name}</p>
                </div>
                <img src="./icons/icon-chevron.svg" alt="icon of a chevron" />
              </Button>
            ))
          : planetData.map((e, index) => (
              <Button
                key={index}
                onclick={handleClick}
                index={index}
                className={"navbar-button upper-case"}
              >
                {e.name}
              </Button>
            ))}
      </div>
      <PlanetDescriptionButtons
        className={"planet-description-buttons mobile"}
      />
    </div>
  );
};
