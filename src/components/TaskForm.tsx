import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";
import { Card, TextField, Typography, Button, Box, Stack } from "@mui/material";

interface Props {
  addANewTask: (task: Task) => void;
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};
export default function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
  };
  return (
    <Card sx={{ padding: "10px", width: "50vw" }}>
      <Typography variant="h6" align="center">
        Add task
      </Typography>
      <Stack
        direction={"column"}
        spacing={2}
        component="form"
        onSubmit={handleNewTask}
      >
        <TextField
          required
          type="text"
          placeholder="Write a title"
          name="title"
          onChange={handleInputChange}
          value={task.title}
        />
        <TextField
          required
          multiline
          name="description"
          id=""
          rows={2}
          placeholder="Write a description"
          onChange={handleInputChange}
          value={task.description}
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </Card>
  );
}
