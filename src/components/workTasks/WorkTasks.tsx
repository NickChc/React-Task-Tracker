import { useContext } from "react";

import { Task } from "../task";
import { GlobalContext } from "../../providers/globalContext";
import { SWorkTasks } from "./SWorkTasks";

import { TTask_Type_Enum } from "../../@types/stateTypes";

export function WorkTasks() {
  const { tasks } = useContext(GlobalContext);

  const workTasks = tasks?.filter((task) => task.type === TTask_Type_Enum.WORK);

  return (
    <SWorkTasks>
      <h2>Word Tasks</h2>
      <hr />
      {workTasks?.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </SWorkTasks>
  );
}
