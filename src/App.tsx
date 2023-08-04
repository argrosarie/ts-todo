import { useState } from "react";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task Title",
      description: "Main task",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);

  const deleteATask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <nav>
        <div>
          <a href="">Task App</a>
        </div>
      </nav>

      <main>
        <div>
          <div>
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div>
            <div>
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
