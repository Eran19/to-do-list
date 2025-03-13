import React from 'react'
import { Trash2 } from 'lucide-react'

interface Todo {
  text: string
  category: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  index: number
  deleteTodo: (index: number) => void
  toggleTodo: (index: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, deleteTodo, toggleTodo }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex items-center">
        <button className="mr-2" onClick={() => toggleTodo(index)}>
          {todo.completed ? '✓' : '✗'}
        </button>
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.text} - {todo.category}
        </span>
      </div>
      <Trash2 className="cursor-pointer" size={24} onClick={() => deleteTodo(index)} />
    </li>
  )
}

export default TodoItem
