import { useContext } from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'

const AppUI = () => {
  const {
    completeTodo,
    deleteTodo,
    error,
    loading,
    openModal,
    searchedTodos,
    setOpenModal,
  } = useContext(TodoContext)

  return (<>
    <TodoCounter />

    <TodoSearch />

    <TodoList>
      { error && <p>Desespérate, hubo un error...</p> }
      { loading && <p>Estamos cargando, no desesperes...</p> }
      { !loading && !searchedTodos.length && <p>Crea tu primer TODO!</p> }

      { searchedTodos.map((todo) => (<TodoItem
        completed={ todo.completed }
        key={ todo.text }
        onComplete={ () => completeTodo(todo.text) }
        onDelete={ () => deleteTodo(todo.text) }
        text={ todo.text }
      />)) }
    </TodoList>

    { !!openModal && (<Modal>
      <TodoForm />
    </Modal>) }


    <CreateTodoButton setOpenModal={ setOpenModal } />
  </>)
}

export { AppUI }
