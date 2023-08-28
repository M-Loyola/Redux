import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../reducers/todoSlice";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("")
  const [todoDescription, setTodoDescription] = useState("")
  const dispatch = useDispatch()

  const onAdd = () => {
    if(todoText !== ""){
      const id = Date.now()
      const addData = {id,title: todoText, description: todoDescription, status: false}
      dispatch(addTodo(addData))
      setTodoText("")
      setTodoDescription("")
    }
  }

  return <div>
    <input type="text" placeholder="Add a todo title" value={todoText} onChange={(event) => {setTodoText(event.target.value)}}/>
    <input type="text" placeholder="Add a todo description" value={todoDescription} onChange={(event) => {setTodoDescription(event.target.value)}}/>
    <button onClick={onAdd}>Add</button>
  </div>
}

export default TodoForm