import { useState, useEffect } from "react";

const currentLocation = () => window.location.hash.replace(/^#!/, "") || "/";
const navigate = (to) => (window.location.hash = "!" + to);

export const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLoc(currentLocation());

    window.addEventListener("hashchange", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
    };
  }, []);

  return [loc, navigate];
};
