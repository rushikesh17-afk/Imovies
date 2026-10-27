import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

// The Vite proxy only works during local development. In production, point
// Axios at the deployed Express API (VITE_API_URL is configured in Vercel).
const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
if (apiUrl) {
  axios.defaults.baseURL = apiUrl
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
