import React from 'react'
import "../../App.css"
import "../../assets/images/OIF.jpg"

function Header() {
  return (
    <>
    <header id='header'>
    <div><img src="../assets/images/OIF.jpg" alt="logo OIF"  height={150}/></div>
    <div className='nav'>

      <a href=""></a>
    <div className='accueil'><a href="#accueil">Acceuil</a></div>
    <div className='profil'><a href="#profil">Profil</a> </div>
    <div className='form'><a href="#form">Form</a></div>
    <div className='menu'> <a href="#sidebar">Menu</a></div>
    </div>
    </header>
      
    </> 
    
  )
}

export default Header