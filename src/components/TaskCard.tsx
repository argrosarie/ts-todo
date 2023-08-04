import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
}
export default function TaskCard({ task }: Props) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button>Delete</button>
    </div>
  );
}
