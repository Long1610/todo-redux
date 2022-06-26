import React from 'react';

const TodoItem = ({ content,deleteAction,id,isCompleted,toggleAction }) => {
  return (
    <div className={isCompleted ?'todo-item done' :'todo-item'}>
      <div className='content'>{content}</div>
      <div className='action'>
        <i className="fa fa-check-circle" onClick={() => toggleAction(id)}></i>
        <i className="fa fa-trash" onClick={() => deleteAction(id)}></i>
      </div>
    </div>
  );
};

export default TodoItem;