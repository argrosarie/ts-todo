import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";
import { Card, TextField, Typography, Button } from "@mui/material";

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
    <Card>
      <Typography>Add task</Typography>
      <form onSubmit={handleNewTask}>
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
          name="description"
          id=""
          rows={2}
          placeholder="Write a description"
          onChange={handleInputChange}
          value={task.description}
        />
        <button>Save</button>
      </form>
    </Card>
  );
}
