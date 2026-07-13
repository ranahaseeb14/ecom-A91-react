import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App'
import.meta.env.MODE
import.meta.env.DEV
import.meta.env.PROD
import.meta.env.VITE_SOME_VALUE

createRoot(document.getElementById('root')).render(<App />)
