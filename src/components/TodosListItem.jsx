import React from 'react';
import TodosForm from "./TodosForm";

const completedStyle = {
  textDecoration: 'line-through',
  color: 'red'
}

const TodosListItem = (props) => {

  const {
    task,
    id,
    createDate,
    isCompleted,
    isEdited,
    handleDelete,
    handleEdit,
    handleSaveEditedTask,
    handleIsCompleted
  } = props

  return (
      <li>
        {
          isEdited
              ? (
                  <React.Fragment>
                    <TodosForm
                        text='Edit'
                        editedId={id}
                        handleSaveEditedTask={handleSaveEditedTask}
                    />
                  </React.Fragment>
              )
              : (
                  <React.Fragment>
                    <input onChange={() => handleIsCompleted(id)} type='checkbox'/>
                    <span style={isCompleted ? completedStyle : {} }>{task}</span>
                    <div>
                      <button onClick={() => handleEdit(id)}>Edit</button>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                  </React.Fragment>
              )
        }
      </li>
  );
};

export default TodosListItem;