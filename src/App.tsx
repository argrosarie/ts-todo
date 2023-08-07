import { useState } from "react";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Container, AppBar, Typography, Box } from "@mui/material";

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
    <>
      <Container
        sx={{
          backgroundColor: "#47667b",
          width: "80vw",
          height: "100vh",
          borderRadius: "16px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="h4" color="white">
          Task App
        </Typography>

        <Box sx={{ marginTop: "40px" }}>
          <div>
            <TaskForm addANewTask={addANewTask} />
            <div>
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default App;
