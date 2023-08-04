import { ChangeEvent, useState } from "react";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };
  return (
    <div>
      <h1>Add task</h1>
      <form action="">
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id=""
          rows={2}
          placeholder="Write a description"
          onChange={handleInputChange}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}
