import './TodoCounting.css'

interface TodoCountingProps {
  todosList: Object[]
}

export function TodoCounting(props: TodoCountingProps) {

  return (
    <p className="todoCounting">
      <span>
        <strong>{props.todosList.filter((todo: any) => !todo.completed).length} -</strong> Ativos
      </span>
      <span>
        <strong>{props.todosList.filter((todo: any) => todo.completed).length} -</strong> Completos
      </span>
    </p>
  )
}