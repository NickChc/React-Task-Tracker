import { useState } from "react";
import { GlobalContext } from ".";
import { TTask } from "../../@types/stateTypes";

interface GlobalProviderProps {
  children: React.ReactNode;
}



export function GlobalProvider({ children }: GlobalProviderProps) {
  const [tasks, setTasks] = useState<TTask[]>([]);
  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
