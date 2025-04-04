import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/partials/Sidebar'
import { Form } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>  
  {/* <App /> */}
  {<Sidebar />}
  {<Form />}

<StrictMode />
)
  
