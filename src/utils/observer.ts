"use client";
import { useEffect, useState, RefObject } from "react";

interface ObserverState {
  isIntersecting: boolean;
}

interface UseObserverResult {
  observerState: ObserverState;
}

const useObserver = (ref: RefObject<Element>): UseObserverResult => {
  const [observerState, setObserverState] = useState<ObserverState>({
    isIntersecting: false,
  });

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver is not supported in this environment."
      );
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setObserverState({ isIntersecting: entry.isIntersecting });
      });
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return { observerState };
};

export default useObserver;
