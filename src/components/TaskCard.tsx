import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}
export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button onClick={() => task.id && deleteATask(task.id)}>Delete</button>
    </div>
  );
}
