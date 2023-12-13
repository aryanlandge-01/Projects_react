import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext';
import TodoItem from './Components/TodoItem';
import  TodoForm  from "./Components/TodoForm"

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo) => {
       setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id  ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed}  : prevtodo))
  }

      useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
         
        if (todos && todos.length > 0) {
             setTodos(todos)
        }
      },[])

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        
      }, [todos])
      



  return ( 
          <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
            <div className="flex flex-wrap min-h-screen py-10 bg-gray-400">
                <div className="w-full">
                      <h1 className='text-center text-4xl mb-5 font-semibold font-serif text-blue-500'>To Do List</h1>
                    <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
                         
                         <TodoForm/>
                    </div>

                    <div className="w-full max-w-sm mx-auto ">
                         {todos.map((todo) => (
                          <div key={todo.id}
                            className='w-full mb-3'
                          >
                             <TodoItem todo={todo}/>
                          </div>
                         ))}
                    </div>
                </div>
            </div>
          </TodoProvider> 
  )
}

export default App
