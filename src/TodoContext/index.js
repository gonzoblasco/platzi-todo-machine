import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const {
    error, item: todos, loading, saveItem: saveTodos,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const addTodo = (text) => {
    const newItem = [...todos]
    newItem.push({
      completed: false,
      text,
    })

    saveTodos(newItem)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newItem = [...todos]
    newItem[todoIndex].completed = !newItem[todoIndex].completed

    saveTodos(newItem)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newItem = [...todos]
    newItem.splice(todoIndex, 1)

    saveTodos(newItem)
  }

  return (<TodoContext.Provider
    value={ {
      addTodo,
      completedTodos,
      completeTodo,
      deleteTodo,
      error,
      loading,
      openModal,
      searchedTodos,
      searchValue,
      setOpenModal,
      setSearchValue,
      totalTodos,
    } }
  >
    { children }
  </TodoContext.Provider>)
}

export { TodoContext, TodoProvider }
