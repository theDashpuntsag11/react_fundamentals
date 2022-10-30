import React from "react";

function TodoCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn">delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
