import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx' 
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Redux Provider to make the store available to components */}
      <ThemeProvider> {/* Custom ThemeProvider to manage theme context */}
        <App2 />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
