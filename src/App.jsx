import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/MyComponent.jsx'
import MyComponent from './components/MyComponent.jsx'
import MyButton from './components/MyButton.jsx'
import MyCard from './components/MyCard.jsx'
import ProductDisplay from './components/ProductDisplay.jsx'
import ThemeToggler from './components/ThemeToggler.jsx'
import { useTheme } from './contexts/ThemeContext.jsx';


function App() {
  const [count, setCount] = useState(0)
  // example of using useState to manage a user object
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    email: ''
  });

  const updateAge = (newAge) => {
    setUser((prevUser) => ({
      ...prevUser,
      age: newAge
    }));
  };

  // example of using useState to manage a to-do list
  const [toDoList, setTodoList] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a project', completed: false },
    { id: 3, task: 'Deploy to production', completed: false }
  ]);
  const addTodo = (task) => {
    setTodoList( (prevList) => [
      ...prevList,
      {id: prevList.length + 1, task: task, completed: false}
    ])
  }
  const toggleTodo = (id) => {
    setTodoList( (prevList) => prevList.map(
      todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
  )}

  const { theme, toggleTheme } = useTheme(); 

  return (
    <>
      <div className={`app ${theme}`}> {/* Example: apply theme class to root div */}
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyComponent />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {/* Passing a prop 'message' and content for 'children' */}
        <MyButton message="Click me!">
          <span>Hello from children!</span>
        </MyButton>

        {/* Simulating named slots by passing JSX elements as props */}
        <MyCard
          header={<h2>Card Header (Passed as Prop)</h2>} // Passing JSX directly as a prop
        >
          {/* Content for children (default slot) */}
          <p>This is the card body content.</p>
        </MyCard>

        <input
          type="text"
          placeholder="Enter new age"
          onChange={(e) => updateAge(e.target.value)}
        />
        <p> User information: {Object.entries(user).map(([k,v]) => `${k}: ${v}`).join(', ')} </p>

        <h2>To-Do List</h2>
        <ul>
          {toDoList.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.task}
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Add a new task" onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTodo(e.target.value);
            e.target.value = ''; // Clear input after adding
          }
        }
        } />
      </div>
      <ProductDisplay productId={1} />
        {/* New component to consume the theme context */}
        <hr />
        <h2>Context API (Theme)</h2>
        <ThemeToggler /> {/* This component will consume the context */}
      </div>
      
      
    </>
  )
}

export default App
