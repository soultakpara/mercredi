import React from 'react'
import { BrowserRouter as   Router, Routes, Route } from 'react-router-dom'
import Accueil from './components/Accueil'
import Profil from "./components/Profil"
import Form from "./components/Form"
// import Footer from './components/partials/Footer'
//<Route path='/menu' element= {<Menu />}/>

function Home() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<Accueil />}/>
        <Route path='/profil' element= {<Profil />}/>
        <Route path='/form' element= {<Form />}/>
      </Routes>
    </Router>
      {/* <Profil />
      <Footer /> */}

    </>
  )
}

export default Home
