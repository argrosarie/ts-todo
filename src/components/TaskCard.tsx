import { Grid, Typography, Button, Card } from "@mui/material";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}
export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <Grid>
      <Typography>{task.title}</Typography>
      <Typography>{task.description}</Typography>
      <Button onClick={() => task.id && deleteATask(task.id)}>Delete</Button>
    </Grid>
  );
}
