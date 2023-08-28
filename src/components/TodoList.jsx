import { List, Row, Col } from "antd";
import TodoItem from "./TodoItem";

const TodoApp = ({todos}) => {
  return <>
    <Row justify="center" style={{margin: '10px'}}>
      <Col span={12}>
        <List
          size="small"
          header={<div>Todo List</div>}
          bordered
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={todo => <TodoItem key={todo.id} todo={todo}/>}
        />
      </Col>
    </Row>
  </>
}

export default  TodoApp;