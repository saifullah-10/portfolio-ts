import { useState, useEffect } from "react";

const useResponsiveDelay = () => {
  const [delay500, setDelay500] = useState(0);
  const [delay1000, setDelay1000] = useState(0);
  const [delay1500, setDelay1500] = useState(0);

  useEffect(() => {
    const updateDelay = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDelay500(0.5); // lg delay
        setDelay1000(1); // lg delay
        setDelay1500(1.5); // lg delay
      } else if (width >= 768) {
        setDelay500(0.5); // md delay
        setDelay1000(1); // md delay
        setDelay1500(1.5); // md delay
      } else {
        setDelay500(0); // default delay
        setDelay1000(0); // default delay
        setDelay1500(0); // default delay
      }
    };

    window.addEventListener("resize", updateDelay);
    updateDelay();

    return () => window.removeEventListener("resize", updateDelay);
  }, []);

  return { delay500, delay1500, delay1000 };
};

export default useResponsiveDelay;
