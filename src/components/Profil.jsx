import React, { useState, useEffect } from "react";
import "../App.css";

function Profil({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil mis à jour !");
    setEditMode(false);
  };

  if (!user) return <p>Chargement du profil...</p>;

  return (
    <div className="profil-container">
      <h2>Profil Utilisateur</h2>

      {!editMode ? (
        <div className="profil-info">
          <p><strong>Nom :</strong> {user.nom}</p>
          <p><strong>Prénom :</strong> {user.prenom}</p>
          <p><strong>Profession :</strong> {user.profession}</p>
          <p><strong>Email :</strong> {user.email}</p>
          <button onClick={() => setEditMode(true)}>Modifier</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profil-form">
          <label>Nom :</label>
          <input type="text" name="nom" value={user.nom} onChange={handleChange} />

          <label>Prénom :</label>
          <input type="text" name="prenom" value={user.prenom} onChange={handleChange} />

          <label>Profession :</label>
          <input type="text" name="profession" value={user.profession} onChange={handleChange} />

          <label>Email :</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />

          <label>Mot de passe :</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} />

          <button type="submit" className="sub">Enregistrer</button>
          <button type="button" onClick={() => setEditMode(false)}>Annuler</button>
        </form>
      )}
    </div>
  );
}

export default Profil;
