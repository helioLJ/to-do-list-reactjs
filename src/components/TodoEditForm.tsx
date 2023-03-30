import { ArrowUp, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import './TodoEditForm.css'

interface TodoEditFormProps {
  editingId: string,
  setEditingId: any,
  value: string,
  setTodos: any,
  todos: Object[]
}

export function TodoEditForm(props: TodoEditFormProps) {
  const [newName, setNewName] = useState(props.value)

  function handleSave(event: FormEvent) {
    event.preventDefault()

    if(newName === "") {
      return alert("Preencha o campo!")
    }

    const updatedTodo = props.todos.map((todo: any) => {
      if (todo.id === props.editingId) {
        todo.name = newName
      }
      return todo
    })
    props.setTodos(updatedTodo)
    props.setEditingId("")
  }

  return (
    <form className="todoEditForm" onSubmit={handleSave}>
      <input
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />

      <div>
        <button
          type="submit"
          title="Salvar"
        >
          <ArrowUp size={20} weight="bold" />
        </button>

        <button
          type="button"
          title="Cancelar"
          onClick={() => props.setEditingId("")}
        >
          <X size={20} weight="bold" />
        </button>
      </div>
    </form>
  )
}