import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { SAddTask } from "./SAddTask";
import { GlobalContext } from "../../providers/globalContext";

import { TTask_Type_Enum } from "../../@types/stateTypes";
import { TTask } from "../../@types/stateTypes";

export function AddTask() {
  const { setTasks, tasks } = useContext(GlobalContext);

  const [taskType, setTaskType] = useState<TTask_Type_Enum>(TTask_Type_Enum.SCHOOL);
  const [newTask, setNewTask] = useState<string>("");

  function createTask() {
    if (taskType && newTask !== "") {
        const task: TTask = {
          description: newTask,
          type: taskType,
          id: uuidv4(),
        };
        setTasks((prev) => [...prev, task]);
    }
    setNewTask("");
    console.log(tasks);
  }

  return (
    <SAddTask>
      {/* keyCode === bad :) but still... */}
      <input onKeyUp={(e) => {
        if (e.keyCode === 13) {
          createTask();
        }
      }}
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select onChange={(e) => setTaskType(e.target.value as TTask_Type_Enum)}>
        {Object.values(TTask_Type_Enum).map((prop) => {
          return <option key={prop} value={prop}>{prop}</option>;
        })}
      </select>
      <button disabled={newTask === ""} onClick={createTask}>ADD</button> 
    </SAddTask>
  );
}
