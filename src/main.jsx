import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data_state from './context/Data_state.jsx'

createRoot(document.getElementById('root')).render(
  <Data_state>
    <App />
  </Data_state>,
)
