import React from "react";

function TodoCard({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn">delete</button>
      </div>
    </div>
  );
}

export default TodoCard;
