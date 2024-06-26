"use Client";
import { useEffect, useMemo, useState, RefObject } from "react";

interface ObserverState {
  isIntersecting: boolean;
}

interface UseObserverResult {
  observer: IntersectionObserver;
  observerState: ObserverState;
}

const useObserver = (
  ref: RefObject<Element>,
  threshold?: number
): UseObserverResult => {
  const [observerState, setObserverState] = useState<ObserverState>({
    isIntersecting: false,
  });

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setObserverState({ isIntersecting: entry.isIntersecting });
          });
        },
        { threshold: threshold }
      ),
    [threshold]
  );

  useEffect(() => {
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
  console.log(observer);
  return { observer, observerState };
};

export default useObserver;
