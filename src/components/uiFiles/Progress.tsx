"use client";

import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { MainContext } from "@/Context/Context";
import useObserver from "@/utils/observer";

interface CustomProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  time?: number;
}

const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProgressProps
>(({ className, value = 0, time = 0, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const combinedRef = ref || localRef;
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("MainContext is null");
  }

  const { observerState } = useObserver(
    combinedRef as React.RefObject<HTMLDivElement>
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (observerState.isIntersecting) {
      console.log(time);
      timer = setTimeout(() => setProgress(value ?? 0), time);
    } else {
      setProgress(0);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [value, observerState.isIntersecting, time]);

  return (
    <>
      <ProgressPrimitive.Root
        ref={combinedRef}
        className={cn(
          "relative h-2 w-full overflow-visible rounded-full bg-primary/20",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-0 flex-1 z-10 rounded-full shadow-skill-glow bg-white relative transition-all duration-1000"
          style={{
            width: `${progress || 0}%`,
          }}
        />
      </ProgressPrimitive.Root>
      <div className=" text-right">
        <h1>{progress}%</h1>
      </div>
    </>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
