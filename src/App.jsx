import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/MyComponent.jsx'
import MyComponent from './components/MyComponent.jsx'
import MyButton from './components/MyButton.jsx'
import MyCard from './components/MyCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      </div>
    </>
  )
}

export default App
