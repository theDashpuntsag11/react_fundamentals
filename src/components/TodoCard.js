import React from "react";

/**
 *    + Componenet
 *       This is an common react function component.
 *     - Components are higly reusable.
 *     - JSX files(or components) are treated as a simple HTML element
 *
 *      + Props or Properties
 *        - When using a function component you can add parameter called props.
 *        - By declaring props( or any variable name you want) paramater the function component
 *          can access the parameters passed by when its invoked.
 *        - "props" is an object parameter. So any named property and values can be passed through.
 *        - When there is any need of using props value in component simply use {}. {} can output
 *          dynamic expressions as a part of the JSX code
 *
 *      + Handleing events
 *        - React is a decarative framework.
 *        - In a normal HTML and JS web we need an unique id or class name to handle the event
 *          that is happening there
 *        - In React you can just pass function via onClick attribute
 *
 **/

function TodoCard(props) {
  function deleteHandler() {
    console.log("Clicked!");
    console.log(props.title);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
