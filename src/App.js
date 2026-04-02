import { useState } from "react";
import Home from "./features/home/Home";
import "./App.css";
const App = () => {
  let [list, setList] = useState([]);
  let [name, setName] = useState("");
  let [role, setRole] = useState("");

  function handleName(e) {}

  function handleRole(e) {}

  function handleDelete(e) {
    // logic to delete
  }

  function onValid(e) {
    // logic to validation
  }

  function handleSave() {
    // logic to save
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
