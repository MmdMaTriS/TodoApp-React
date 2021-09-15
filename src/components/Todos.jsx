import React from "react";
import PropTypes from "prop-types";
import edit from "../../public/images/Edit.png";
function Todos({ data, checkTodo, removeTodo, editTodo }) {
  return (
    <li className={data.isDone ? "completed" : ""}>
      <div className="form-check" style={{ fontFamily: "MmdReg" }}>
        <label
          className="form-check-label"
          style={{ fontSize: "17px", letterSpacing: "0.7px" }}
        >
          <input
            checked={data.isDone}
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
      <i onClick={() => editTodo(data.id, data.title)}>
        <img
          style={{
            width: "20px",
            cursor: "pointer",
            marginLeft: "7px",
            marginBottom: "3px",
          }}
          src={edit}
          alt="edit.png"
        />
      </i>
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
