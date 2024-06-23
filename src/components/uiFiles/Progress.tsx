"use client";

import React, { useContext } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { MainContext } from "@/Context/Context";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, ...props }, ref) => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("MainContext is null");
  }
  const { progress, setProgress } = context;
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value ?? 0), 1000);
    return () => clearTimeout(timer);
  }, [value, setProgress]);
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
