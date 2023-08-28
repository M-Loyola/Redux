import {List, Row, Col, Input} from "antd";
import {EditOutlined, DeleteOutlined, SaveOutlined, CheckOutlined} from "@ant-design/icons"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteTodo, updateTodo} from "../reducers/todoSlice";

const TodoApp = ({todo}) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoDescription, setTodoDescription] = useState(todo.description);
  const dispatch = useDispatch()

  const removeTodo = () => {
    dispatch(deleteTodo(todo.id))
  }

  const updateTodoList = () => {
    const updatedData = {id: todo.id, title: todoTitle, description: todoDescription};
    dispatch(updateTodo(updatedData))
    setIsUpdate(false)
  }

  const markAsDone = () => {
    const updatedData = {id: todo.id, status: true};
    dispatch(updateTodo(updatedData))
  }
  return <>
    <List.Item>
      <List.Item.Meta
        title={
          <Row>
            <Col span={20} style={{display: "flex", wordWrap: "break-word"}}>
              {!isUpdate ?
                <span style={{textDecoration: todo.status ? "line-through" : ""}}>{todo.title}</span> :
                <Input defaultValue={todo.title} onChange={(event) => setTodoTitle(event.target.value)}/>
              }
            </Col>
            <Col span={4} style={{display: "flex", gap: "10px"}}>
              <DeleteOutlined onClick={removeTodo}/>
              {!isUpdate ? <EditOutlined onClick={() => setIsUpdate(true)}/> : <SaveOutlined onClick={updateTodoList}/>}
              <CheckOutlined onClick={markAsDone}/>
            </Col>
          </Row>
        }
        description={<>{!isUpdate ? <span>{todo.description}</span> : <Input defaultValue={todo.description} onChange={(event) => setTodoDescription(event.target.value)}/>}</>}
      />
    </List.Item>
  </>
}

export default  TodoApp;