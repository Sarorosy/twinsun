import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookaCall from './components/BookaCall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BookaCall />
  </StrictMode>,
)
