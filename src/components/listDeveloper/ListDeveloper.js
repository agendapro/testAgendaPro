import React from "react";

const ListDeveloper = (list) => {
  return (
    <div className="list">
      {list.list.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="header">
              <i className="fas fa-id-card-alt"></i>
            </div>
            <div className="body">
              <p>
                <b>{item.name}</b>
              </p>
              <p>{item.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListDeveloper;
