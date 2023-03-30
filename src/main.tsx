import ReactDOM from 'react-dom/client'

import './global.css'
import { TodoListApp } from './pages/TodoListApp'

const initialTodos = [
  {
    name: "Go to Shopping",
    id: "453-6345-123fvfd",
    completed: false
  },
  {
    name: "Feed Dog",
    id: "235-6345-657hjgf",
    completed: false
  },
  {
    name: "Eat Bananas",
    id: "453-6345-5gsfdh",
    completed: false
  },
  {
    name: "Workout",
    id: "453-85856-123fvfd",
    completed: false
  },
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <TodoListApp initialTodos={initialTodos} />
    <footer>Feito com 🧡 por <a href="https://github.com/helioLJ" target="_blank">Hélio Lúcio</a> </footer>
  </>
)
