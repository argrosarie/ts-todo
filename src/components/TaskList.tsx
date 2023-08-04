import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}
export default function TaskList({ tasks, deleteATask }: Props) {
  return (
    <>
      {tasks.map((task, id) => (
        <div key={id}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
