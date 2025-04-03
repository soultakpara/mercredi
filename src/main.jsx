import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Header from './components/partials/Header.jsx'
import Accueil from './components/Accueil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accueil />
    {/* {<Header />} */}
  </StrictMode>,
)
