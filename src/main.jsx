import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
<<<<<<< HEAD
//import App from './App.jsx'
//import Footer from './Footer.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
=======
import App from './App.jsx'
import Sidebar from './components/partials/Sidebar.jsx'
import Form from './components/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {<Sidebar />}
    {<Form />}

>>>>>>>) origin/SideBar
=======
// import App from './App.jsx'
import Header from './components/partials/Header.jsx'
import Accueil from './components/Accueil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accueil />
    {/* {<Header />} */}
>>>>>>> origin/Header
  </StrictMode>,
)
