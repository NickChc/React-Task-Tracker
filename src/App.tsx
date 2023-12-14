import { SApp } from "./assets/SApp";
import { AddTask } from "./features/addTask";

import { SchoolTasks } from "./components/schoolTasks";
import { WorkTasks } from "./components/workTasks";

function App() {
  return (
    <SApp>
      <AddTask />
      <div>
        <SchoolTasks />
        <WorkTasks />
      </div>
    </SApp>
  );
}

export default App;
