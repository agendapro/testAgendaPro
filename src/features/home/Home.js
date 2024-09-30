import React, { useState } from "react";
import data from "../../data/data.json";
import logo from "../../logo.png";
import "../../App.css";
import FilterDeveloper from "../../components/filterDeveloper/FilterDeveloper";

const Home = () => {
  let [list, setList] = useState(data);

  const addDeveloper = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const createDeveloper = {
      name: formData.get("name"),
      role: formData.get("role"),
      id: list.length + 1,
    };
    setList([...list, createDeveloper]);
  };
  console.log(list);

  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="wrapper align-start">
        <div className="flex flex-direction-column">
          <p>Agregar un nuevo miembro al equipo: </p>
          <form
            className="form flex flex-direction-column"
            onSubmit={addDeveloper}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Agregue un nombre"
            />
            <select id="role" name="role">
              <option value="backend developer">backend developer</option>
              <option value="frontend developer">frontend developer</option>
            </select>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <FilterDeveloper list={list} />
      </div>
    </div>
  );
};

export default Home;
