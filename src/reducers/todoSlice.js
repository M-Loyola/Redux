import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 1, title: 'Do some tasks', description: "this is some task", status: false},
    {id: 2, title: 'Do some tasks 1', description: "this is some task 1", status: false},
  ],
  reducers: {
    deleteTodo: (state, action) => {
      const todoIndex = state.findIndex(item => item.id === action.payload);
      state.splice(todoIndex, 1);
    },
    updateTodo: (state, action) => {
      return state.map(item => item.id === action.payload.id ? {...item, ...action.payload} : item)
    },
    addTodo: (state, action) => {
      state.push(action.payload)
    },
  }
})

export const {deleteTodo, updateTodo, addTodo} = todoSlice.actions

export default todoSlice.reducer