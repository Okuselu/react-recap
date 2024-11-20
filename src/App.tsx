import React from "react";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import LoginControl from "./components/LoginControl";
import TodoList from "./components/TodoList";
import TemperatureInput from "./components/TemperatureInput";

const App: React.FC = () => {
  return (
    <div>
      <Welcome />

      <h2>Greeting Component</h2>
      <Greeting name="Brave Fellow" />

      <h2>Counter Component</h2>
      <Counter />

      <h2>LoginControl Component</h2>
      <LoginControl />

      <h2>TodoList Component</h2>
      <TodoList />

      <h2>TemperatureInput Component</h2>
      <TemperatureInput />
    </div>
  );
};

export default App;
