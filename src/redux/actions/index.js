import * as types from '../constants/index';

export const addTodo = (todoText) => ({
  type: types.ADD_TODO,
  todoText,
});

export const deleteTodo = (todoId) => ({
  type: types.DELETE_TODO,
  todoId,
});

export const toggleTodo = (todoId) => ({
  type: types.TOGGLE_TODO,
  todoId,
});

export const clearTodo = () => ({
  type: types.CLEAR_TODO
})