import { TodoInputForm } from '../components/TodoInputForm'
import { TodoFilter } from '../components/TodoFilter'
import { TodoCounting } from '../components/TodoCounting'
import { TodoItem } from '../components/TodoItem'

import './TodoListApp.css'
import { useState } from 'react'

interface TodoListAppProps {
  initialTodos: Object[]
}

export function TodoListApp(props: TodoListAppProps) {
  const [todos, setTodos] = useState(props.initialTodos)
  const [newTodo, setNewTodo] = useState("")
  const [filter, setFilter] = useState("all")
  const [editingId, setEditingId] = useState("")

  let showingList

  function mapTodos(todosList: Object[]) {
    return todosList.map((todo: any) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        todos={todos}
        setTodos={setTodos}
        editingId={editingId}
        setEditingId={setEditingId}
      />
    ))
  }

  const allTodos = mapTodos(todos)

  if (filter === "active") {
    const activeTodos = todos.filter((todo: any) => !todo.completed)
    showingList = mapTodos(activeTodos)
  } else if (filter === "completed") {
    const completedTodos = todos.filter((todo: any) => todo.completed)
    showingList = mapTodos(completedTodos)
  } else {
    showingList = allTodos
  }

  return (
    <main>
      <h1>To-do List</h1>

      <TodoInputForm
        newTodo={newTodo}
        onNewTodoChange={setNewTodo}
        addNewTodo={setTodos}
      />

      <div className="filterAndCounting">
        <TodoFilter onFilterChange={setFilter} />
        <TodoCounting todosList={todos} />
      </div>

      <ul>
        {
          showingList
        }
      </ul>
    </main>
  )
}