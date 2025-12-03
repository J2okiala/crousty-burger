import './App.css'
import { useState } from "react";


function App() {

  const [prenom, setPrenom] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (prenom.trim() === "") {
    setError("Please fill in this field");
    return;
    }
    setError("");
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <p>Connectez-vous</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        placeholder="Entrez votre prénom..."
        className="border p-2 rounded-xl"
      />
      {error && <span className="text-red-600 text-sm">{error}</span>}
      <button
        type="submit"
        className="p-3 rounded-xl shadow font-semibold hover:opacity-90"
      >
        Accéder à votre espace
      </button>
      </form>
    </div>
  )
}

export default App
