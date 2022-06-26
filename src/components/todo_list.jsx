import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo_items';
import { deleteTodo, toggleTodo, clearTodo } from '../redux/actions/index';
class TodoList extends Component {
  render() {
    const { deleteItem, toggleItem, list, clearTodo } = this.props;
    return (
      <div className='todo-list'>
        <h2>My to do list</h2>
        <div className='list-items'>
          {list.map((item, index) => (
            <TodoItem key={index} id={index} {...item} deleteAction={deleteItem} toggleAction={toggleItem} />
          ))}
        </div>
        <button className="btn-clear-todo" onClick={() => clearTodo()}>Clear todo</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.todoReducer.list,
});
const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteTodo(id)),
  toggleItem: (id) => dispatch(toggleTodo(id)),
  clearTodo: () => dispatch(clearTodo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);