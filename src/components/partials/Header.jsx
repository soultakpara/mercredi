import React from 'react'
import "../../App.css"
import "../../assets/images/OIF.jpg"
import { Link } from 'react-router-dom'
//<div className='menu'> <Link to= "/menu">Menu</Link></div>
function Header() {
  return (
    <>
    
    <header id='header'>
    <div><img src="../assets/images/OIF.jpg" alt="logo OIF"  height={150}/></div>
    <div className='nav'>

    <div className='accueil'><Link to="/" >Acceuil</Link></div>
    <div className='profil'><Link to= "/profil">Profil</Link> </div>
    <div className='form'><Link to="/form">Form</Link></div>
    
    </div>
    </header>
      
    </> 
    
  )
}

export default Header