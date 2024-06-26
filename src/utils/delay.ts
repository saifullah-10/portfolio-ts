import { useState, useEffect } from "react";

const useResponsiveDelay = () => {
  const [delayResponsive, setDelayResponsive] = useState("");
  const [responsiveDuration, setResponsiveDuration] = useState("");

  useEffect(() => {
    const updateDelay = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDelayResponsive("lg");
        setResponsiveDuration("lg"); // lg delay
      } else if (width >= 768) {
        setDelayResponsive("md"); // md delay
        setResponsiveDuration("md"); // md delay
      } else {
        setDelayResponsive("sm"); // default delay
        setResponsiveDuration("sm"); // default delay
      }
    };

    window.addEventListener("resize", updateDelay);
    updateDelay();

    return () => window.removeEventListener("resize", updateDelay);
  }, []);

  return { delayResponsive };
};

export default useResponsiveDelay;
