import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent } from 'react';

import uuid from 'react-uuid';

import './TodoInputForm.css'

interface TodoInputFormProps {
  newTodo: string,
  onNewTodoChange: any,
  addNewTodo: any
}

export function TodoInputForm(props: TodoInputFormProps) {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    props.addNewTodo((prevState: Object[]) => [{
      name: props.newTodo,
      id: uuid(),
      completed: false
    }, ...prevState])

    props.onNewTodoChange("")
  }

  return (
    <form className="todoInputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione seu novo To-do!"
        value={props.newTodo}
        onChange={(event) => props.onNewTodoChange(event.target.value)}
      />
      <button
        type="submit"
        title="Adicionar"
      >
        <PaperPlaneRight size={20} weight="bold" />
      </button>
    </form>
  )
}