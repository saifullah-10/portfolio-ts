import { useEffect, useMemo, useState, RefObject } from "react";

interface ObserverState {
  isIntersecting: boolean;
}

interface UseObserverResult {
  observer: IntersectionObserver | null;
  observerState: ObserverState;
}

const useObserver = (ref: RefObject<Element>): UseObserverResult => {
  const [observerState, setObserverState] = useState<ObserverState>({
    isIntersecting: false,
  });

  const observer = useMemo(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setObserverState({ isIntersecting: entry.isIntersecting });
        });
      });
    } else {
      console.warn(
        "IntersectionObserver is not supported in this environment."
      );
      return null;
    }
  }, []);

  useEffect(() => {
    if (!observer) return;

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observer]);

  return { observer, observerState };
};

export default useObserver;
