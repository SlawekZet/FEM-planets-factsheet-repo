import { useContext } from "react";
import { PlanetsContext } from "../context/PlanetsContext";

export const usePlanetContext = () => {
  const pctx = useContext(PlanetsContext);
  if (!pctx) {
    throw new Error(
      "Missing PlanetContext, it's not wrapper in PlanetProvider"
    );
  }
  return pctx;
};
