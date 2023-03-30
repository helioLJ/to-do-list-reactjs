import { NotePencil, Check } from 'phosphor-react'

import './TodoFilter.css'

interface TodoFilterProps {
  onFilterChange: any
}

export function TodoFilter(props: TodoFilterProps) {
  return (
    <div className="filter-buttons">
      <button
        title="Todos"
        onClick={() => props.onFilterChange("all")}
      >
        All
      </button>

      <button
        title="Ativos"
        onClick={() => props.onFilterChange("active")}
      >
        <NotePencil size={20} weight="bold" />
      </button>
      <button
        title="Completos"
        onClick={() => props.onFilterChange("completed")}
      >
        <Check size={20} weight="bold" />
      </button>
    </div>
  )
}