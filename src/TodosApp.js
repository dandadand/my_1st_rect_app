import React, { useEffect, useState } from 'react';

import TestButton from './components/UI/Button/index'

import TodosForm from "./components/TodosForm";
import TodosList from "./components/TodosList";

import './TodosApp.css'

const initialTodosList = [
  {
    task: 'Go to School',
    createDate: '14 January',
    id: 1,
    isCompleted: false,
    isEdited: false
  },
  {
    task: 'Buy milk!',
    createDate: '13 January',
    id: 2,
    isCompleted: false,
    isEdited: false
  }
]


const TodosApp = () => {
  const [todosCount, setTodosCount] = useState(0)
  const [todosList, setTodosList] = useState(initialTodosList)

  // 1 - callback, 2 - dependencies - массив зависимостей
  useEffect(() => {
    setTodosCount(todosList.length)
  }, [todosList.length])

  // React Life Cycles

  // 1 - Initialization
  // 2 - Mount - componentDidMount
  // 3 - Update - componentDidUpdate, componentWillUpdate
  // 4 - Unmount - componentDidUnmount

  const handleDelete = (id) => {
    setTodosList((previous) => {
      return previous.filter(todo => todo.id !== id)
    })
  }

  //
  const handleEdit = (id) => {
    setTodosList((previous) => {
      return previous.map(todo => {
        if (todo.id === id) {
          return {...todo, isEdited: !todo.isEdited}
        }
        return todo
      })
    })
  }

  const handleSaveEditedTask = (id, task) => {
    setTodosList((previous) => {
      return previous.map(todo => {
        if (todo.id === id) {
          return {...todo, task: task, isEdited: !todo.isEdited}
        }
        return todo
      })
    })
  }

  const handleIsCompleted = (id) => {
    setTodosList( previous => {
      return previous.map(todo => {
        if(todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      })
    })
  }

  return (
      <div className='container'>
        <h1>Todos {todosCount}</h1>
        <TodosForm
            todosList={todosList}
            setTodosList={setTodosList}
            text='Submit'
        />
        <TodosList
            handleIsCompleted={handleIsCompleted}
            handleSaveEditedTask={handleSaveEditedTask}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            todosList={todosList}
        />
      </div>
  );
};

export default TodosApp;