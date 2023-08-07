import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";
import { Grid } from "@mui/material";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}
export default function TaskList({ tasks, deleteATask }: Props) {
  return (
    <>
      {tasks.map((task, id) => (
        <Grid container key={id} justifyItems={"center"} alignItems={"center"}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </Grid>
      ))}
    </>
  );
}
