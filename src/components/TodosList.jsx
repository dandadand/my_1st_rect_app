import React from 'react';
import TodosListItem from "./TodosListItem";

const TodosList = ({ todosList, handleDelete, handleEdit, handleSaveEditedTask, handleIsCompleted }) => {

  return (
      <ul>
        {todosList.map((todosItem, idx) => (
            <TodosListItem
                handleIsCompleted={handleIsCompleted}
                handleSaveEditedTask={handleSaveEditedTask}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                task={todosItem.task}
                id={todosItem.id}
                createDate={todosItem.createDate}
                isCompleted={todosItem.isCompleted}
                isEdited={todosItem.isEdited}
                key={idx}
            />
        ))}
      </ul>
  );
};

export default TodosList;