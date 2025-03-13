import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { PlusCircle } from 'lucide-react'

interface Todo {
  text: string
  category: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('General')

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue.trim(), category, completed: false }])
      setInputValue('')
    }
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const toggleTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Todo List</h1>
          <PlusCircle className="cursor-pointer" size={24} onClick={addTodo} />
        </div>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="General">General</option>
            <option value="Eating at Home">Eating at Home</option>
            <option value="Eating Out">Eating Out</option>
            <option value="Watching Anime">Watching Anime</option>
            <option value="Watching Movies">Watching Movies</option>
          </select>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  )
}

export default App
