import React, { useState, useEffect } from "react";
import "./App.css";
import Profil from "./components/Profil";
import Footer from "./components/partials/Footer";
// import Header from "./components/partials/Header";

import { UserContext } from "./context/UserContext";

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
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>Bienvenue sur Project Mercredi 👋</h1>
        <Profil user={user} setUser={setUser} />
        <Footer title="Project Mercredi" author="Ibra Fashion" year={2024} />
      </div>
    </UserContext.Provider>
  );
}

export default Home;
