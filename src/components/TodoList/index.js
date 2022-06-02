import React from 'react'
import './TodoList.css'

const TodoList = (props) => (
  <section>
    <ul>{ props.children }</ul>
  </section>
)

export { TodoList }
