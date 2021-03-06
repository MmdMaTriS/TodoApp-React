import React, { useState } from "react";
import PropTypes from "prop-types";
function AddTodoInputs({ showTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="add-items d-flex">
        <input
          id="getInput"
          style={{ fontFamily: "MmdReg" }}
          value={newTodo}
          onChange={handleNewTodo}
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
        />
        <button
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
          onClick={() => {
            if (!newTodo) return;
            showTodo(newTodo);
            setNewTodo("");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

AddTodoInputs.prototype = {
  showTodo: PropTypes.func,
};
export default AddTodoInputs;
