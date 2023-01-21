import React, { useState } from 'react';

const TodosForm = ({ setTodosList, todosList, text, editedId, handleSaveEditedTask }) => {
  const [task, setTask] = useState('')


  const handleChange = (event) => setTask(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!task.trim()) {
      alert('Нельзя добавить пустое значение!!!')
      setTask('')
      return
    }

    const visible = todosList.some((todo) => todo.task === task.trim())

    if(visible) {
      alert('Точно такая же задача уже есть!!! Разуй глаза')
      setTask('')
      return
    }

    const newTask = {
      task: task,
      createDate: '13 January',
      id: Date.now(),
      isCompleted: false,
      isEdited: false
    }

    setTodosList((previous) => {
      return [...previous, newTask]
    })

    setTask('')
  }

  const handleEdit = (event) => {
    event.preventDefault()

    handleSaveEditedTask(editedId, task)
  }

  return (
      <form onSubmit={text === 'Edit' ? handleEdit : handleSubmit}>
        <input
            onChange={handleChange}
            type='text'
            value={task}
        />
        <button type='submit'>
          {text}
        </button>
      </form>
  );
};

export default TodosForm;
