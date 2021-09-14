import React from "react";
import PropTypes from "prop-types";
function Todos({ data, checkTodo, removeTodo }) {
  return (
    <li className={data.isDone ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => checkTodo(data.id)}
          />
          {data.title}
          <i className="input-helper"></i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => removeTodo(data.id)}
      ></i>
    </li>
  );
}

Todos.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default Todos;
