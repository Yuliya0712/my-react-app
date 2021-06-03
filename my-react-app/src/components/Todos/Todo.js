import "./Todo.scss";
import {useState} from 'react';

 const Todo = () => {

 const [todos, setTodos] = useState([
     {
         id:1,
         text: "first todo",
     },
     {
        id:2,
        text: "second todo",
    },
    {
        id:3,
        text: "third todo",
    },
 ]);
console.log(todos);

const[newTodo, setNewTodo] = useState(initialState, '');

const inputChange = (e)=>{
setNewTodo(e.target.value);
}

const addTodo = (e) =>{
    e.preventDefault();
    const newTodoItem = {
        
    }
}
    return (
      <div className="todos">
        <form className="todos_form">
          <input type="text" placeholder="Your new todo..." />
          <button type="submit">Add todo</button>
        </form>
        <div className="todos_list">
            {todos.map(({id,text:other})=>{

                return (<div className="todos_item" key={id}>
                    {other}
                </div>
                );
            })
            }
            
        </div>
      </div>
    );
};

export default Todo;