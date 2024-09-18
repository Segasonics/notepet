import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {NoteState} from './context/NoteState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NoteState>
    <App />
    </NoteState>
    </BrowserRouter>
    
  </React.StrictMode>,
)
