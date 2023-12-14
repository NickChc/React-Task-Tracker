import { GlobalProvider } from "../globalContext";
import { GlobalCss } from "../../assets/global.styled";
import React from "react";``

interface ProviderProps {
  children: React.ReactNode;
}

export function MainProvider({ children }: ProviderProps) {
  return (
    <>
      <GlobalCss />
      <GlobalProvider>{children}</GlobalProvider>
    </>
  );
}
