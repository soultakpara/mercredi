import React, { useState, useEffect } from "react";
import "./App.css";
import Profil from "./components/Profil";
import Footer from "./components/partials/Footer";
// import Header from "./components/partials/Header";

import { UserContext } from "./context/UserContext";
import React from 'react'
import { BrowserRouter as   Router, Routes, Route } from 'react-router-dom'
import Accueil from './components/Accueil'
import Profil from "./components/Profil"
import Form from "./components/Form"
// import Footer from './components/partials/Footer'
//<Route path='/menu' element= {<Menu />}/>

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fakeUser = {
        nom: "GUIRGUISSOU",
        prenom: "Ibrahim",
        profession: "Développeur-Web Junior",
        email: "ibrahimguirguissou@gmail.com",
        password: "Absohkle1254@er/",
      };
      setUser(fakeUser);
    }, 1000);
  }, []);

  return (
  
    <>
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>Bienvenue sur Project Mercredi 👋</h1>
        <Profil user={user} setUser={setUser} />
        <Footer title="Project Mercredi" author="Ibra Fashion" year={2024} />
      </div>
    </UserContext.Provider>
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

export default Home;
