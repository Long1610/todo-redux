import * as types from '../constants/index';

const initalState = {
  list: [],
}

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state, list: [...state.list, { content: action.todoText, isCompleted: false }]
      };
    case types.DELETE_TODO:
      return {
        ...state, list: state.list.filter((item, index) => index !== action.todoId),
      };
    case types.TOGGLE_TODO:
      return {
        ...state, list: state.list.map((item, index) => 
          index === action.todoId ? { ...item, isCompleted: !item.isCompleted } : item
        )
      };
    case types.CLEAR_TODO: return { ...state, list: [] };
    default: return { ...state };
  }
};

export default todoReducer;