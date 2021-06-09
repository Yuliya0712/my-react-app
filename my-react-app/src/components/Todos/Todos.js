import "./Todos.scss";
import { Button, IconButton, TextField } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

<<<<<<< HEAD
=======
  // const useState = (argument) => {
  //   // ...
  //   return [a, b];
  // };

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "first todo",
  //     status: 'new',
  //   },
  //   {
  //     id: 2,
  //     text: "second todo",
  //     status: 'new',
  //   },
  //   {
  //     id: 3,
  //     text: "third todo",
  //     status: 'new',
  //   },
  // ]);
  const [todos, setTodos] = useState([]);

>>>>>>> 67661ecfd8cd74c993eee69bb21409651ab4229f
  const [newTodo, setNewTodo] = useState('');

  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      status: 'new',
    }

    setTodos((prevState) => [newTodoItem, ...prevState])
    setNewTodo('')

<<<<<<< HEAD
  };

  console.log(todos)

  const editTodo = id => {

  }

  function deleteTodo (id) {
    setTodos(todos.filter(todo=>todo.id !== id))
  }
=======
    // console.log('newTodoItem', newTodoItem)
  };

  // const [tests, setTests] = useState({
  //   value1: '',
  //   value2: '',
  // });
  //
  // const testHandler = (e) => {
  //   setTests(prevState => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }
  //
  // console.log(tests)
>>>>>>> 67661ecfd8cd74c993eee69bb21409651ab4229f

  return (
    <div className="todos">
      <form className="todos__form"
            onSubmit={addTodo}>
<<<<<<< HEAD
        <TextField label="Your new todo..."
                   type="text"
                   size="small"
                   name="todo"
                   value={newTodo}
                   onChange={inputChange}
                   variant="outlined" />
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={newTodo}*/}
        {/*  onChange={inputChange}*/}
        {/*  placeholder="Your new todo..."*/}
        {/*/>*/}
        <Button variant="contained"
                type="submit"
                color="primary">Add todo</Button>
      </form>
      <div className="todos__list">
        {todos.length
          ? (todos.map(({id, text}) => {
            return (
              <div className="todos__item"
                   key={id}>
                <p>{text}</p>
                <div className="todos__actions">
                  <IconButton size="small"
                              color="primary"><Edit /></IconButton>
                  <Button startIcon={<Delete />}
                          onClick={() => deleteTodo(id)}>Delete</Button>

                </div>
=======
        <input
          type="text"
          value={newTodo}
          onChange={inputChange}
          placeholder="Your new todo..."
        />
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={tests.value1}*/}
        {/*  name="value1"*/}
        {/*  onChange={testHandler}*/}
        {/*  placeholder="Your new todo 22..."*/}
        {/*/>*/}
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={tests.value2}*/}
        {/*  name="value2"*/}
        {/*  onChange={testHandler}*/}
        {/*  placeholder="Your new todo 33..."*/}
        {/*/>*/}
        <button type="submit">Add todo</button>
      </form>
      <div className="todos__list">
        {todos.length
          ? (todos.map(({id, text: other}) => {
            // const finalText = other + 1;
            return (
              <div className="todos__item"
                   key={id}>
                {other}
>>>>>>> 67661ecfd8cd74c993eee69bb21409651ab4229f
              </div>
            );
          }))
          : <h2>No todos...</h2>}
      </div>
    </div>
  );
};

export default Todos;
