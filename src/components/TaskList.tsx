import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}
export default function TaskList({ tasks }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div>
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
}
