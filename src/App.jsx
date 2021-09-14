import React, { useState } from "react";
import AddTodoInputs from "./components/AddTodoInputs";
import Todos from "./components/Todos";

const getTodos = [
  {
    id: Math.floor(Math.random() * 9000),
    title: "Buy a new Car",
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 9000),
    title: "Buy a new Laptop",
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 9000),
    title: "Go to the GYM",
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(getTodos);

  const handleCheckTodo = (id) => {
    const copyTodos = [...todos];
    copyTodos.filter((copyTodo) => {
      copyTodo.id === id
        ? (copyTodo.isDone = !copyTodo.isDone)
        : (copyTodo.isDone = copyTodo.isDone);
    });
    setTodos(copyTodos);
  };

  const handleShowTodo = (title) => {
    const showNewTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 9000), title, isDone: false },
    ];
    setTodos(showNewTodos);
    console.log(todos);
  };

  const handleRemoveTodo = (id) => {
    const copyTodos = [...todos];
    copyTodos.filter((copyTodo, index, arr) => {
      copyTodo.id === id ? arr.splice(index, 1) : "";
    });
    setTodos(copyTodos);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title" style={{ fontFamily: "MmdBold" }}>
                  Awesome Todo list
                </h4>
                <AddTodoInputs showTodo={handleShowTodo} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {todos.map((todo, id) => (
                      <Todos
                        key={id}
                        data={todo}
                        checkTodo={handleCheckTodo}
                        removeTodo={handleRemoveTodo}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
