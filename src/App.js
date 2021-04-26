import { useEffect, useState } from "react";
import logo from "./logo.png";
import data from "./data/data.json";
import "./App.css";

const App = () => {
  let [list, setList] = useState([]);
  let [name, setName] = useState("");
  let [position, setPosition] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleSave() {
    setList([
      {
        name: name,
        position: position,
      },
      ...list,
    ]);
  }

  useEffect(() => {
    setList(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="wrapper align-start">
        <div className="flex flex-direction-column">
          <p>Agregar un nuevo miembro al equipo: </p>
          <div className="form flex flex-direction-column">
            <input
              type="text"
              placeholder="Agregue un nombre"
              onChange={(e) => handleName(e)}
            />
            <select onChange={(e) => handlePosition(e)}>
              <option value="backend developer">backend developer</option>
              <option value="frontend developer">frontend developer</option>
            </select>
            <button type="button" onClick={() => handleSave()}>
              Agregar
            </button>
          </div>
        </div>
        <div>
          <div className="wrapper">
            <div className="flex flex-direction-column align-center">
              <h4 className="title">Equipo AgendaPro</h4>
              <div className="separator"></div>
            </div>
          </div>
          <div className="list">
            {list.map((item) => {
              return (
                <div className="card">
                  <div className="header">
                    <i className="fas fa-id-card-alt"></i>
                  </div>
                  <div className="body">
                    <p>
                      <b>{item.name}</b>
                    </p>
                    <p>{item.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
