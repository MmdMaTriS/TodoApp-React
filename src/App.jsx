import React, { useState } from "react";
import AddTodoInputs from "./components/AddTodoInputs";
import DarkMode from "./components/DarkMode";
import Todos from "./components/Todos";
import moon from "../public/images/moon.png";
import sun from "../public/images/sun.png";

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

  const handleEditTodo = (id, title) => {
    const copyTodos = [...todos];
    copyTodos.filter((copyTodo) => {
      if (copyTodo.id === id) {
        const newTodo = prompt("Enter a new Title", "");
        if (!newTodo) return;
        copyTodo.title = newTodo;
      }
    });
    setTodos(copyTodos);
  };

  const darkMode = () => {
    const darkModeLoc = document.getElementById("darkMode");
    if (darkModeLoc.alt === "LightMode") {
      darkModeLoc.src = `${moon}`;
      darkModeLoc.style.backgroundColor = "white";
      darkModeLoc.style.borderRadius = "white";
      darkModeLoc.alt = "DarkMode";
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#202020";
      document.getElementById("org-card").style.backgroundColor = "#404040";
      document.getElementsByTagName("body")[0].style.color = "white";
      document.getElementById("card-title").className = "dark-after";
      document.getElementById("getInput").style.color = "white";
    } else if (darkModeLoc.alt === "DarkMode") {
      darkModeLoc.src = `${sun}`;
      darkModeLoc.style.backgroundColor = "#404040";
      darkModeLoc.style.borderRadius = "white";
      darkModeLoc.alt = "LightMode";
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#f9f9fa";
      document.getElementById("org-card").style.backgroundColor = "#fff";
      document.getElementsByTagName("body")[0].style.color = "black";
      document.getElementById("card-title").className = "dark-after2";
      document.getElementById("getInput").style.color = "black";
    }
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="dark-mode">
        <DarkMode isDark={darkMode} />
      </div>
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3" id="org-card">
              <div className="card-body">
                <h4
                  className="card-title"
                  id="card-title"
                  style={{ fontFamily: "MmdBold" }}
                >
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
                        editTodo={handleEditTodo}
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
