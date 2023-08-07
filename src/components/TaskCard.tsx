import { Grid, Typography, Button, Card } from "@mui/material";
import { Task } from "../interfaces/Task";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}
export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <Grid item bgcolor={"white"} margin={1} padding={1} borderRadius={"4px"}>
      <Typography variant="h6">{task.title}</Typography>
      <Typography>{task.description}</Typography>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => task.id && deleteATask(task.id)}
      >
        Delete
      </Button>
    </Grid>
  );
}
