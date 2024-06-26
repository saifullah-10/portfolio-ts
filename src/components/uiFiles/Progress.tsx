"use client";

import React, { useContext, useRef } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { MainContext } from "@/Context/Context";
import useObserver from "@/utils/observer";

interface CustomProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  time?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProgressProps
>(({ className, value = 0, time = 0, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("MainContext is null");
  }
  const { progress, setProgress } = context;
  const { observer, observerState } = useObserver(ref);
  console.log(observer, observerState);

  React.useEffect(() => {
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
  }, [value, observerState.isIntersecting, setProgress, time]);
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 z-10 relative bg-red-300 transition-all duration-1000"
        style={{
          transform: `translateX(-${100 - (progress || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
