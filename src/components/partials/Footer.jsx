import React, { useState } from "react";
import "../../App.css";

function Footer() {
 
  return (
    <>
      <footer className="footer-container">
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="/profil">Profil</a></li>
            <li><a href="/form">Form</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Politique de Confidentialité</a></li>
            <li><a href="#">Mentions Légales</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form action="#">
            <input type="email" placeholder="Votre email" required />
            <input type="text" placeholder="Votre nom" required />
            <button type="submit">S'ABONNER</button>
          </form>
        </div>

        <div className="d-flex pt-2">
          <a
            className="btn btn-outline-light btn-social"
            href="https://www.tiktok.com/@projectmercredi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i> TikTok
          </a>

          <a
            className="btn btn-outline-light btn-social"
            href="https://www.facebook.com/projectMercredi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; mercredi, Tous droits réservés. Développé par{" "}
            <a href="#">Ibra Fashion</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
