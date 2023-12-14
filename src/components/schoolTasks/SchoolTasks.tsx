import { useContext } from "react";

import { GlobalContext } from "../../providers/globalContext";
import { SSchoolTasks } from "./SSchoolTasks";
import { Task } from "../task";

import { TTask_Type_Enum } from "../../@types/stateTypes";

export function SchoolTasks() {
    const { tasks } = useContext(GlobalContext);

    const schoolTasks = tasks?.filter((task) => task.type === TTask_Type_Enum.SCHOOL);

    return <SSchoolTasks>
        <h2>School Tasks</h2>
        <hr />
        {schoolTasks?.map((task) => {
            return (
              <Task key={task.id} task={task} />
            );
        })}
    </SSchoolTasks>
}