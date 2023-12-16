import { createContext, useEffect, useState } from "react";

export const PlanetsContext = createContext(null);

export const PlanetProvider = ({ children }) => {
  const [planetData, setPlanetData] = useState([]);
  const [planetToDisplay, setPlanetToDisplay] = useState(2);
  const [dataToDisplay, setDataToDisplay] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setPlanetData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(true);
      });
  }, []);

  return (
    <PlanetsContext.Provider
      value={{
        planetData,
        planetToDisplay,
        setPlanetToDisplay,
        dataToDisplay,
        setDataToDisplay,
        error,
        isLoading,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};
