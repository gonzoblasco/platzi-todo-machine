import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { addTodo, setOpenModal } = useContext(TodoContext)
  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (ev) => {
    setNewTodoValue(ev.target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form onSubmit={ onSubmit }>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        onChange={ onChange }
        placeholder="Cortar de cebollar para el almuerzo"
        value={ newTodoValue }
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button-cancel"
                onClick={ onCancel }>Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add"
                type="submit">Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
