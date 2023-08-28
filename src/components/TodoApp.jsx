import {useSelector} from "react-redux";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const todoList = useSelector((state) => state.todoList)

  return <>
    <TodoForm/>
    <TodoList todos={todoList} />
  </>
}

export default  TodoApp;