"use client";
import React, { createContext, ReactNode, useState } from "react";
interface AllContextType {
  name: string;
  progress: number;
  setProgress: (value: number) => void;
}

export const MainContext = createContext<AllContextType | null>(null);
interface ContextProps {
  children?: any;
}
export default function Context({ children }: ContextProps) {
  const [progress, setProgress] = useState(0);

  console.log(progress);
  return (
    <MainContext.Provider value={{ name: "hello", progress, setProgress }}>
      {children}
    </MainContext.Provider>
  );
}
