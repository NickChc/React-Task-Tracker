import { createContext } from "react";
import { TTask } from "../../@types/stateTypes";

interface TGlobalContext {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
}


export const GlobalContext = createContext<TGlobalContext>({
  tasks: [],
  setTasks: () => {},
});
