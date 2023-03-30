import { Pencil, Trash } from 'phosphor-react'
import { useState } from 'react'

import { TodoEditForm } from './TodoEditForm'

import './TodoItem.css'

interface TodoItemProps {
  id: string,
  name: string,
  completed: boolean,
  setTodos: any,
  todos: Object[],
  editingId: string,
  setEditingId: any
}

export function TodoItem(props: TodoItemProps) {

  function handleCheck() {
    const updatedTodo = props.todos.map((todo: any) => {
      if (todo.id === props.id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    props.setTodos(updatedTodo)
  }

  function handleDelete() {
    const updatedTodo = props.todos.filter((todo: any) => todo.id !== props.id)
    props.setTodos(updatedTodo)
  }

  return (
    <li className={props.completed ? "todoItem completedTodo" : "todoItem"}>
      {props.editingId === props.id ?
        <TodoEditForm
          editingId={props.editingId}
          setEditingId={props.setEditingId}
          value={props.name}
          todos={props.todos}
          setTodos={props.setTodos}
        />
        : (
          <>
            <div className="leftTodoItem">
              <input
                type="checkbox"
                checked={props.completed}
                onChange={handleCheck}
              />

              <p>{props.name}</p>
            </div>

            <div className="rightTodoItem">
              <button
                type="button"
                onClick={() => props.setEditingId(props.id)}
              >
                <Pencil size={20} weight="bold" />
              </button>
              <button
                type="button"
                onClick={handleDelete}
              >
                <Trash size={20} weight="bold" />
              </button>
            </div>
          </>
        )
      }
    </li>
  )
}