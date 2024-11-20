import React from "react";

const TodoList: React.FC = () => {
  const tasks = ["Learn React", "Build an App", "Deploy App"];

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TodoList;
