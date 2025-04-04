import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom"; 

function Footer({ title, author, year }) {
  const user = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", nom: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      console.log("Formulaire envoyé :", formData);
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ email: "", nom: "" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Liens utiles</h3>
        <ul>
          <li><Link to="/"> Accueil </Link></li>
          <li><Link to="/profil"> Profil </Link></li>
          <li><Link to="/form"> Form </Link></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Politique de Confidentialité</a></li>
          <li><a href="#">Mentions Légales</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <button type="submit">S'ABONNER</button>
        </form>
        {submitted && (
          <p style={{ color: "green" }}>
            Merci pour votre abonnement {user?.prenom || formData.nom} !
          </p>
        )}
      </div>

      <div className="d-flex pt-2">
        <a className="btn btn-outline-light btn-social" href="https://www.tiktok.com/@projectmercredi" target="_blank" rel="noreferrer">
          <i className="fab fa-tiktok"></i> TikTok
        </a>
        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/projectMercredi" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year || new Date().getFullYear()} {title}, Tous droits réservés. Développé par <a href="#">{author}</a></p>
      </div>
    </footer>
  );
}

export default Footer;
