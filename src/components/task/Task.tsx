import { useContext, useState } from "react";

import { GlobalContext } from "../../providers/globalContext";

import { STask } from "./STask";

import { TTask } from "../../@types/stateTypes";


interface TaskProps {
    task: TTask;
}

interface removeTaskProps {
    taskId: string | number;
}


export function Task({ task }: TaskProps) {
    const { tasks, setTasks } = useContext(GlobalContext);

    const [done, setDone] = useState<boolean>(false);
    
    function removeTask({ taskId }: removeTaskProps) {
        const newTasks = tasks?.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }

    return <STask isDone={done}>
        <h3>{task.description}</h3>
        <div>
            <button onClick={() => setDone(!done)}>{done && "Undone" || "Done"}</button>
            <button onClick={() => removeTask({ taskId: task.id })}>Remove</button>
        </div>
    </STask>
}