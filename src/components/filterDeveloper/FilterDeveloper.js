import React, { useState } from "react";
import ListDeveloper from "../listDeveloper/ListDeveloper";

function FilterDeveloper(list) {
  const [listNew, setlistNew] = useState(list.list);
  const handleSearch = (e) => {
    const name = e.target.value;
    const filterList = list.list?.filter((dev) =>
      dev.name.toLowerCase().includes(name.toLowerCase())
    );
    
    setlistNew(filterList);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="flex flex-direction-column align-center">
          <div className="form flex flex-direction-column">
            <p>Buscar por nombre o Role:</p>
            <input
              type="text"
              placeholder="Agregue un nombre"
              onChange={handleSearch}
            />
          </div>
          <div>
            <h4 className="title">Equipo AgendaPro</h4>
            <div className="separator"></div>
          </div>
        </div>
      </div>
      <ListDeveloper list={listNew} />
    </div>
  );
}

export default FilterDeveloper;
