import React from 'react'
import TodoItem from './TodoItem'

interface Todo {
  text: string
  category: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  deleteTodo: (index: number) => void
  toggleTodo: (index: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList
